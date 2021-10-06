const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/', todoController.showToDo); // route to show all todo
router.post('/addtodo', todoController.addtodo) // route to add todo
router.get('/:id', todoController.getOnetodo) // route to show one todo by id
router.put('/:id', todoController.updateOne) // route to update one todo by id
router.delete('/:id', todoController.deleteOne) // route to delete one todo by id

module.exports = router