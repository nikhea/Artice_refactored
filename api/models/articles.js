const mongoose = require('mongoose')
Schema = mongoose.Schema
      
const articlesShema =new  Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    Created_now: {
        type:Date,
        default: Date.now
    },
    comments: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
})
let Articles = mongoose.model('Articles', articlesShema)

module.exports = Articles