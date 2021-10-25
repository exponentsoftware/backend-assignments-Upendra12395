const express = require('express')
const ToDo = require('../models/todo')
const bodyParser = require('body-parser')

// controller to add todo
module.exports.addtodo = (req, res) =>{
    const { userName, title, status, category} = req.body
    if (!userName || !title || !status || !category){
        return res.status(400).json({ message: "please enter all fieds" });
    }
    const newTodo = new ToDo({
        userName : userName,
        title:title,
        status:status,
        category:category
    });
    newTodo.save().then((todo) => {
                 return res.status(201).json({ message: "todo saved successfully." });
				})
				.catch((error) => {
					return res.status(500).json({ message: error.message });
				});
}

//controller to shwo all todo
module.exports.showToDo = (req, res) =>{
    ToDo.find()
    .then((todos) =>{
        res.status(200).json(todos)
    })
    .catch((error)=>{
        res.status(500).json({message:error.message})
    })
    
}

//controller to show one todo by id
module.exports.getOnetodo = (req, res) =>{
    let id = req.params.id
    ToDo.findById(id)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((error)=>{
        res.status(500).json({message: error.message})
    })
}

//controller to update one todo by id
module.exports.updateOne = (req, res) =>{
    let id = req.params.id;
    ToDo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((todo) =>{
        res.json(todo)
    })
    .catch((error)=>{
        res.status(500).json({message:error.message})
    })
    
}

//controller to delete one todo by id
module.exports.deleteOne = (req, res) =>{
    const id = req.params.id
    ToDo.findByIdAndDelete(id)
    .then((todo)=>{
        res.send({message: "todo deleted successfully"})
    })
    .catch(error =>{
        res.status(500).json({message:error.message})
    })
}

module.exports.fetchByCategory = (req, res)=>{
    const category = req.params.category
    ToDo.find({category:category})
    .then((todo)=>{
        res.status(200).json(todo)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
}

module.exports.fetchByTitle = (req, res)=>{
    const title = req.params.title
    ToDo.find({title : title})
    .then(todo=>{
        res.status(200).json(todo)
    })
    .catch(err =>{
        res.status(500).json({message : err.message})
    })
}