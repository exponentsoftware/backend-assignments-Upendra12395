const mongoose =  require('mongoose')

//model for todo 
const todoSchema = new mongoose.Schema({
    userName:{
        type : String,
        require: true
    },
    title:{
        type: String,
        require : true
    },
    status:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    }
},
{timestamps:true});

module.exports = mongoose.model("Todo", todoSchema);