//const controllers = require('./controllers')
const mysql = require('mysql')
const express = require('express')
const app = express.Router()
const cors = require("cors")

app.use(cors())

app.get('/', (req, res, next) => {
	console.log("connected!")
	res.send("Server is up!")
	next()
})

module.exports = app