const express = require('express')
const route = express.Router()
const functions = require('../controller/functions')

route.use(express.static('public'))

route.get('/', functions.home)
route.post('/post', functions.post)

module.exports = 
    route
