const Post = require('../models/posts.js')

const home = (req, res) => {
    Post.find().sort({createdAt: -1})
        .then( result => {
            res.render("index", {result})
        })  
        .catch(err => console.log(err))
}

const post = (req, res) => {
    const post = new Post({
        name : 'flups',
        post : req.body.blog
    }) 

    post.save()
    res.redirect('/');
}


module.exports = {
    home,
    post
}

