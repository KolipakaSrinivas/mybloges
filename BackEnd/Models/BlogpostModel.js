const mongoose = require('mongoose')

const Schema = mongoose.Schema


const BlogoPostShema = new Schema({

    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:String
    },

},{ timestamps:true })


module.exports = mongoose.model('BlogPost',BlogoPostShema)