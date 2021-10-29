const express =  require('express')
const router = express.Router()
const userController = require('../controllers/user')
//const adminAuth = require('../middleware/admin')

const passport = require('passport')
require('../middleware/admin')(passport)

router.get('/', passport.authenticate('jwt', {session : false}), userController.getAll)
router.post('/signIn', userController.addUser)
router.post('/logIn', userController.getLogIn)
router.get('/:id', passport.authenticate('jwt', {session : false}), userController.getOneUser)
router.patch('/:id', passport.authenticate('jwt', {session : false}), userController.updateOneUser)
router.delete('/', passport.authenticate('jwt', {session : false}), userController.deleteAllUser)
router.delete('/:id', passport.authenticate('jwt', {session : false}), userController.deleteOneUser)

module.exports = router