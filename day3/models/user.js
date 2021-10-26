const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    UserName:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    todoList:{
        type : Array
    }
},{timestamps : true})

module.exports = mongoose.model("User", userSchema)
