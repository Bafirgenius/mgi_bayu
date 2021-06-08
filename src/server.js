//Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

//Express
const app = express();

//Import routes
const {userRoute} = require('./routes')


//database
const db = require("./config/database");

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route
app.use("/", userRoute)


//Module Exports
module.exports = app;
