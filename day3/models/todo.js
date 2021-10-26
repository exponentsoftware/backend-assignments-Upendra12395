const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    Status:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps : true})

module.exports = mongoose.model("Todo", todoSchema)