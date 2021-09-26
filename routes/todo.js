const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/', todoController.showToDo);
router.post('/addtodo', todoController.addtodo)
router.get('/:id', todoController.getOnetodo)
router.put('/:id', todoController.updateOne)
router.delete('/:id', todoController.deleteOne)

module.exports = router