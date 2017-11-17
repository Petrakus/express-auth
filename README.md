# express-auth
Express authentication and authorization skeleton using passport, mongodb and bcrypt.
## Getting started
First you need to have npm and Node.js installed. To install project dependencies use:
```
npm install
```
To start the server use:
```
npm start
```
*Note that if you have set the ENV variable PORT server will use the port that you set there. Otherwise server will be started at port: 3001
## Endpoints
### /api/auth/register - User registration. Method: POST
Request:
```
{
	"name":"Test",
	"email":"test@example.com",
	"password":"1234"
}
```
Response:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YTBlYTJjZmIwNzc0ODIwNjA0MjZmMDUiLCJpYXQiOjE1MTA5MDg2MjMsImV4cCI6MTUxMDk5NTAyM30.X5XDB6_m1R9P87ErslknRs1qP6gVV815HyPLPRrKP8s"
}
```
### /api/auth/login - User login. Method: POST
Request:
```
{
	"email":"test@example.com",
	"password":"1234"
}
```
Response:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YTBlYTJjZmIwNzc0ODIwNjA0MjZmMDUiLCJpYXQiOjE1MTA5MDg2MjMsImV4cCI6MTUxMDk5NTAyM30.X5XDB6_m1R9P87ErslknRs1qP6gVV815HyPLPRrKP8s"
}
```
### /api/auth/me - User details. Method: GET
Request:
```
Header:
authorization: <token>
```
Response:
```
{
    "_id": "5a0ea2cfb077482060426f05",
    "name": "Test",
    "email": "test@example.com",
    "password": null,
    "__v": 0
}
```

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [MongoDB](https://www.mongodb.com/) - Move at the Speed of Your Data
* [Passport](https://github.com/jaredhanson/passport) - Passport is Express-compatible authentication middleware for Node.js.

## Authors

* **Petar Petrov** - *Initial work* - [Petrakus](https://github.com/Petrakus)

See also the list of [contributors](https://github.com/Petrakus/express-auth/graphs/contributors) who participated in this project.
