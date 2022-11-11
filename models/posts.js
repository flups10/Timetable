const { Schema } = require('mongoose')

const postSchema = new Schema( {
    name : {
        type: string,
        required: true
    },
    post : {
        type: string,
        required: true
    },
    date : {
        date: new Date().toLocaleString,
        required: true
    }
})

module.exports(
    postSchema
)