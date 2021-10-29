const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');


router.get('/showTodo', todoController.showToDo); // route to show all todo
router.post('/addTodo', todoController.addtodo) // route to add todo
router.get('/getOne/:id', todoController.getOnetodo) // route to show one todo by id
router.put('/updateOne/:id', todoController.updateOne) // route to update one todo by id
router.delete('/deleteOne/:id', todoController.deleteOne) // route to delete one todo by id

//==========================================================================================
//Day 2 asignments for filtering the data
// fetch by category
// search by title
// Add capability to sort the data by created_at

router.get('/categorywise/:category', todoController.fetchByCategory)
router.get('/titlewise/:title', todoController.fetchByTitle)
router.get('/sortBycreatedDate', todoController.sortTodo)
router.patch('/updateStatus/:id', todoController.updateStatus)

module.exports = router