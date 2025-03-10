# This an Implementation of basic USer Authentication, Authorization and RoleBased access control using JWT,Node.js,Express.js,Mongodb

set up the project environment 
install all the necessary packages like express mongoose dotenv jsonwebtoken 
declare the port
create an express application
specify the routes #(Here I created routes for registering and login in one file authRoutes.js and for Rolebased access control I declared another file userRoutes.js)
define the middlewares and functionalities of middleware #(for authorisation using webtokens i.e generating token when logging in and using that token to access the Rolebased accessible files)
create a file for database connectivity and managing 
Implement the logic that stores the user details when registered 
Then when the registered user attempts to login check for the credentials and validate user
generate token if valid user
Implement the logic for Rolebased access control based on the user role 
define the accessible files and routes
and enable user to access the files and routes
