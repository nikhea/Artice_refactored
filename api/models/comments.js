const mongoose = require('mongoose')
Schema = mongoose.Schema
      
const commentsShema =new  Schema({
    content:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    Created_now: {
        type:Date,
        default: Date.now
    }
    

})
let Comments = mongoose.model('commentsShema', commentsShema)

module.exports = Comments