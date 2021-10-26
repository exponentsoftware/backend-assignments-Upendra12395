const express =  require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getAll)
router.post('/addUser', userController.addUser)
router.get('/:id', userController.getOneUser)
router.patch('/:id', userController.updateOneUser)
router.delete('/', userController.deleteAllUser)
router.delete('/:id', userController.deleteOneUser)

module.exports = router