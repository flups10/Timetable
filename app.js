const express = require('express')
const ejs = require('ejs')
const mongo = require('mongoose')
const fs = require('fs')

app = express()

app.use(express.static('public'))

// This way I keep the DB URI a secret
mongoURL = fs.readFile('secret.txt', 'utf8', (err, data) => {
    mongo.connect(data)
        .then(() => app.listen(3001), console.log('succes'))
        .catch(err => console.log(err))
})

app.set('view engine','ejs')

app.get('/', (req, res) =>{
    res.render('index')
})

