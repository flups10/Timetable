const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const postSchema = new Schema( {
    name : {
        type: 'string',
        required: true
    },
    post : {
        type: 'string',
        required: true
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = (
    Post
)