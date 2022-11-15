const express = require('express')
const ejs = require('ejs')
const mongo = require('mongoose')
const fs = require('fs')
const routes = require('./config/routes')


const app = express()

app.set('view engine','ejs')

app.use(express.urlencoded({
    extended: true
}));

app.use(routes)

// This way I keep the DB URI a secret, should replace this with env vars in future
fs.readFile('secret.txt', 'utf8', (err, data) => {
    mongo.connect(data)
        .then(() => app.listen(3001))
        .catch(err => console.log(err))
})