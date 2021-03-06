# Chef Portfolio Back-end Documentation

Heroku App URL: https://chef-portfolio-fernandez.herokuapp.com

Notes: I have note tested the update and delete endpoints. I will be testing them Monday and working on adding checks for valid emails and phone numbers.

## Endpoints
* Create User: POST [/api/user/register](#create-new-user)
* Login User: POST [/api/user/login](#login-user)
* Create Recipe: POST [/api/chef/recipes](#create-recipe)
<!-- * Create Ingredients: POST [/api/chef/ingredients](#create-ingredients)
* Create Instructions: POST [/api/chef/instructions](#create-instructions) -->
* Update Recipe: PUT [/api/chef/recipes/{recipe_id}](#update-recipe)
* Update Chef: PUT [/api/chef/update](#update-chef)
<!-- * Update Ingredients: PUT [/api/chef/recipes/{ingredient_id}](#update-ingredients)
* Update Instructions: PUT [/api/chef/recipes/{instruction_id}](#update-instructions) -->
* Delete Recipe: DELETE [/api/chef/recipe/{id}](#delete-recipe)
<!-- * Delete Ingredients: DELETE [/api/chef/ingredients/{id}](#delete-ingredients)
* Delete Instructions: DELETE [/api/chef/instructions/{id}](#delete-instructions) -->
* Get All Entries: GET [/api/user/recipes](#get-all-recipes)
* Get Recipe By ID: GET [/api/user/recipes/{id}](#get-recipe-by-id)
* Get Chef Recipes: GET [/api/chef/recipes](#get-chef-recipes)

***

# Create New User

HTTP request: **POST** /api/user/register

Body

| name             | type   | required | description                                     | 
| ---------------- | ------ | -------- | ----------------------------------------------- |
| username         | String | Yes      | Must be unique, no spaces, minimum 2 characters |
| password         | String | Yes      | Minimum 3 characters                            |
| location         | String | no       |                                                 |
| email            | String | no       | must be valid email Ex. "munch200@gmail.com"    |
| phone_number     | String | no       | must be valid phone number Ex. "(559) 361-0031" |


Example
```java
{
	"username":"Loremenius",
    "password":"zed"
	"location":"rice and spam wrapped in seaweed.",
	"phone_number":"(559) 361-0031",
	"email":"munch2000@gmail.com"
}
```

Response 201 Created
```java
{
    "message": "Chef created sucessfully!"
}
```

[Back to top](#chef-portfolio-back-end-documentation)

# Login User

HTTP request: **POST** /api/user/login

Body

| KEY | VALUE |
|-----|-------|
| username | your username |
| password | your password |


This will grant an "token" in the JSON response. It will be required as a header Authorization: access_token_here for all endpoints that begin with /api/chef. Token will be valid for 1 hour.

Response 200 OK
```java
{
    "message": "Welcome loremenius",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvcmVtZW5pdXMiLCJpZCI6MSwiaWF0IjoxNTc4Mjg2Njc0LCJleHAiOjE1NzgyOTAyNzR9.21Ap1BJ48jkP6q2RLO8gkpv9f5cTX21iHfqIYt-kSJM"
}
```

[Back to top](#chef-portfolio-back-end-documentation)

# Create Recipe

HTTP request: **POST** /api/chef/recipes

Body

| name         | type    | required | description                                  | 
| ------------ | ------- | -------- | -------------------------------------------- |
| name         | String  | Yes      | Recipe name                                  |
| description  | String  | Yes      | Description of recipe                        |
| image_url    | String  | Yes      | url link of photo                            |
| meal_type    | String  | Yes      | Type of meal Ex. Lunch                       |
| ingredients  | String  | Yes      | List of ingredients                          |
| instructions | String  | Yes      | List of instructions                         |


Example
```java
{
	"name":"Spam Musubi",
	"description":"rice and spam wrapped in seaweed.",
	"image_url":"A URL",
	"meal_type":"Lunch",
    "ingredients":"rice, spam, seaweed",
    "instructions":"place spam on rice, wrap in seaweed"
}
```

Response 201 Created

[Back to top](#chef-portfolio-back-end-documentation)

<!-- # Create Ingredients

HTTP request: **POST** /api/chef/ingredients

Body

| name         | type     | required | description                                  | 
| ------------ | -------- | -------- | -------------------------------------------- |
| name         | String   | Yes      | Name of ingredient                           |
| quantity     | String   | Yes      | Description of quantity                      |
| recipe_id    | Integer  | Yes      | Id of the recipe                             |


Example
```java
{
	"name":"spam",
	"quantity":"1 Can",
	"recipe_id":1
}
```

Response 201 Created


[Back to top](#chef-portfolio-back-end-documentation)

# Create Instructions

HTTP request: **POST** /api/chef/instructions

Body

| name         | type     | required | description                                  | 
| ------------ | -------- | -------- | -------------------------------------------- |
| instruction  | String   | Yes      | Instructions                                 |
| step_number  | Integer  | Yes      | The step number                              |
| recipe_id    | Integer  | Yes      | Id of the recipe                             |


Example
```java
{
	"instruction":"wrap in seaweed",
	"step_number":1,
	"recipe_id":1
}
```

Response 201 Created


[Back to top](#chef-portfolio-back-end-documentation) -->

# Update Recipe

HTTP request: **POST** /api/chef/recipes/{recipe_id}

Body

| name         | type    | required | description                                  | 
| ------------ | ------- | -------- | -------------------------------------------- |
| name         | String  | Yes      | Recipe name                                  |
| description  | String  | Yes      | Description of recipe                        |
| image_url    | String  | Yes      | url link of photo                            |
| meal_type    | String  | Yes      | Type of meal Ex. Lunch                       |
| ingredients  | String  | Yes      | List of ingredients                          |
| instructions | String  | Yes      | List of instructions                         |


Example
```java
{
	"name":"Spam Musubi",
	"description":"rice and spam wrapped in seaweed.",
	"image_url":"A URL",
	"meal_type":"Lunch",
    "ingredients":"rice, spam, seaweed",
    "instructions":"place spam on rice, wrap in seaweed"
}
```

Response 201 Created

[Back to top](#chef-portfolio-back-end-documentation)

# Update Chef

HTTP request: **POST** /api/chef/update

Body

| name             | type   | required | description                                     | 
| ---------------- | ------ | -------- | ----------------------------------------------- |
| username         | String | Yes      | Must be unique, no spaces, minimum 2 characters |
| location         | String | no       |                                                 |
| email            | String | no       | must be valid email Ex. "munch200@gmail.com"    |
| phone_number     | String | no       | must be valid phone number Ex. "(559) 361-0031" |

- Note: username can be the same but you cannot change to one that already exists.

Example
```java
{
	"username":"Loremenius",
	"location":"rice and spam wrapped in seaweed.",
	"phone_number":"(559) 361-0031",
	"email":"munch2000@gmail.com"
}
```

Response 201 Created

[Back to top](#chef-portfolio-back-end-documentation)

<!-- # Update Ingredients

HTTP request: **POST** /api/chef/ingredients/{ingredient_id}

Body

| name         | type     | required | description                                  | 
| ------------ | -------- | -------- | -------------------------------------------- |
| name         | String   | No       | Name of ingredient                           |
| quantity     | String   | No       | Description of quantity                      |
| recipe_id    | Integer  | No       | To change which recipe it is attached to     |


Example
```java
{
	"name":"spam",
	"quantity":"1 Can"
}
```

Response 201 Created


[Back to top](#chef-portfolio-back-end-documentation)

# Update Instructions

HTTP request: **POST** /api/chef/instructions/{instruction_id}

Body

| name         | type     | required | description                                  | 
| ------------ | -------- | -------- | -------------------------------------------- |
| instruction  | String   | No       | Instructions                                 |
| step_number  | Integer  | No       | The step number                              |
| recipe_id    | Integer  | No       | To change which recipe it is attached to     |


Example
```java
{
	"instruction":"wrap in seaweed",
	"step_number":1,
}
```

Response 201 Created


[Back to top](#chef-portfolio-back-end-documentation) -->


# Delete Recipe

HTTP request: **DELETE** /api/chef/recipes/{recipe_id}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

<!-- # Delete Ingredients

HTTP request: **DELETE** /api/chef/ingredients/{ingredient_id}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

# Delete Instructions

HTTP request: **DELETE** /api/chef/instructions/{instruction_id}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation) -->

# Get All Recipes

HTTP request: **GET** /api/user/recipes

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

# Get Recipe By ID

HTTP request: **GET** /api/recipes/{id}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

# Get Chef Recipes

HTTP request: **GET** /api/chef/recipes

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)