
const mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)


var Users = require('./routers/router.js')

app.use(Users)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})