const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose')

const app = express()
let port = process.env.PORT || 3001

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect(config.db, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

let routes = require('./api/routes/routes') // importing route
routes(app) // register the route

app.listen(port)

console.log('API server started on: ' + port)
