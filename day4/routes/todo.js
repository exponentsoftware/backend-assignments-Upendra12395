const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const userAuth = require('../middleware/user')
const adminAuth = require('../middleware/admin')

const passport = require('passport')
require('../middleware/admin')(passport)

//day4 task
//Signed in User should only be able to call the routes
router.get('/showTodo', passport.authenticate('jwt', {session : false}), todoController.showToDo); // route to show all todo
//router.get('/showToDoForAdmin', adminAuth, todoController.showToDoForAdmin) // route for admin to show todo
router.post('/addTodo', passport.authenticate('jwt', {session : false}), todoController.addtodo) // route to add todo
router.get('/getOne/:id', passport.authenticate('jwt', {session : false}), todoController.getOnetodo) // route to show one todo by id
router.put('/updateOne/:id', passport.authenticate('jwt', {session : false}), todoController.updateOne) // route to update one todo by id
router.delete('/deleteOne/:id', passport.authenticate('jwt', {session : false}), todoController.deleteOne) // route to delete one todo by id

//day2 routes

router.get('/categorywise/:category', passport.authenticate('jwt', {session : false}), todoController.fetchByCategory)
router.get('/titlewise/:title', passport.authenticate('jwt', {session : false}), todoController.fetchByTitle)
router.get('/sortBycreatedDate', passport.authenticate('jwt', {session : false}), todoController.sortTodo)
router.patch('/updateStatus/:id', passport.authenticate('jwt', {session : false}), todoController.updateStatus)
router.patch('/updateStatusByAdmin/:id', passport.authenticate('jwt', {session : false}), todoController.updateStatusByAdmin)

module.exports = router