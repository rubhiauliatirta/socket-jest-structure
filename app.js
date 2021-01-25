const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// all your express middleware here

module.exports = app