const express = require('express');

const userDb = require('./user_route_model');
const validateLoginBody = require("../middleware/ValidateLoginBody");
const validateRequestBody = require("../middleware/ValidateRegisterBody");
const validateRecipeId = require('../middleware/ValidateRecipeId');
const validateEmail = require("../middleware/ValidateEmail");
const validatePhoneNumber = require("../middleware/ValidatePhoneNumber");

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

router.get("/recipes",(req,res)=>{
    userDb.getRecipes()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            res.status(500).json({message:"error getting users", error:error});
        });
});

router.get("/recipes/:id",validateRecipeId,(req,res)=>{
    let recipeData =  req.recipe;
     res.status(200).json(recipeData);
    // userDb.getIngredientsById(req.params.id)
    //     .then(data=>{
    //         recipeData= {...recipeData, ingredients: data};
    //         return userDb.getInstructionsById(req.params.id)
    //             .then(data=>{
    //                 recipeData = {...recipeData, instructions: data};
    //                 res.status(200).json(recipeData);
    //             })
    //         })
    //   .catch(error=>{
    //       console.log(error)
    //         res.status(500).json({message:"error getting recipe", error:error});
    //     })
});
    


router.post('/login', validateLoginBody, (req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    userDb.findByName(req.body.username)
        .then(data=>{
            if(data && bcrypt.compareSync(req.body.password, data.password)){
                const token = signToken(data);
                res.status(200).json({
                    message:`Welcome ${data.username}`,
                    chef:{
                        username:data.username,
                        location:data.location,
                        phone:data.phone_number,
                        email:data.email
                    },
                    token:token
            });
            }else{
                res.status(401).json({message:'Invalid Credentials'});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                message: 'error logging in  user'
            });
        })
});

router.post('/register',validateRequestBody, validateEmail,validatePhoneNumber,(req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password,8);
    userDb.createChef(req.body)
        .then(data=>{
            console.log("insert success",data)
            if(data){
                res.status(201).json({message:"Chef created sucessfully!"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});

function signToken(user) {
    const payload = {
      username: user.username,
      id: user.id, 
    };
  
    const secret = process.env.JWT_SECRET || "Chef has been signed in";
  
    const options = {
      expiresIn: "1h",
    };
  
    return jwt.sign(payload, secret, options); 
  };

module.exports = router;