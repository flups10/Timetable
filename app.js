const express = require('express')
const ejs = require('ejs')
const mongo = require('mongoose')
const fs = require('fs')
const Post = require('./models/posts.js')

const app = express()
const route = express.Router()

app.set('view engine','ejs')
route.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}));

// Homepage
route.get('/', (req, res) =>{
    res.render('index')
})

route.post('/post', (req, res) => {

    const post = new Post({
        name : 'flups',
        blog : req.body.blog
    }) 

    post.save()
    res.render('index');
})


app.use(route)
// This way I keep the DB URI a secret
fs.readFile('secret.txt', 'utf8', (err, data) => {
    mongo.connect(data)
        .then(() => app.listen(3001))
        .catch(err => console.log(err))
})