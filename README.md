# Express - Exercise - Middleware

## Access control middleware

Write a middleware which checks if the user is allowed to call a certain route.

Depending on his status or role he gets access to our admin area or not.

### Setup

* Execute `npm install` (or just short: `npm i`) to install dependencies (=> express) 
* Create a file server.js
* In server.js - Setup an express application
* Create a GET route "/secure"
    * This should just return "You reached the security area"

### Task

* Write an age check middleware function "ageCheck" that you attach to the route "/secure":
    * Check if there is a parameter "age" given in the query string (req.query)
    * If so: Check if the user is at least 18 and allow him to pass on to /secure route
    * If neither age param is provided or the age is below 18 
        * pass a string "Too young for this" to the next() function to cancel the request

* Test the route /secure in the browser
    * Append a query string with the age parameter
    * Test the outputs for an age below and above 18


### Bonus task

* Paste the following array before your route definitions:
    let arrUsers = [
        {username: "yourname", role:"Admin"}, 
        {username: "Rob", role: "User"}
    ]
    => replace yourname with your real name

* Add a GET route / which provides a headline and an HTML link to the route "/admin"

* Add a GET route /admin
    * send an HTML message `<h1>Welcome to Admin page</h1>`

* Add a middleware which checks for a field "username" on the request
    * Check if the user has the role "admin"
    => if not: redirect him to homepage "/" 

