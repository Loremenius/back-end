module.exports = (req, res, next) => {
    if(req.body.email){
        if (/\S+@\S+\.\S+/.test(req.body.email)){
            next();
        }else{
            res.status(400).json({message:"you have provided an invalid email."})
        }
    }else{
        next();
    }
}
