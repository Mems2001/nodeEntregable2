// Router
const router = require('express').Router()

// File's import
const usersServices = require('./users.services');

// Routes

router.get('/users' , usersServices.getAllUsers)
router.post('/users' , usersServices.postNewUser)

router.get('/users/:id' , usersServices.getUserById)

module.exports = router