const express = require('express')
const ToDo = require('../models/todo')
const bodyParser = require('body-parser')

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

module.exports.showToDo = (req, res) =>{
    ToDo.find()
    .then((todos) =>{
        res.status(200).json(todos)
    })
    .catch((error)=>{
        res.status(500).json({message:error.message})
    })
    
}

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

module.exports.deleteOne = (req, res) =>{
    
}