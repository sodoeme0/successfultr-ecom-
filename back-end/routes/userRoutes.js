const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

//load page for get request and login function for post request

router.route('/')
.post(userController.login)

//load page for get request and sign up function for post request

router.route('/signup')
.post(userController.signUp)
  
//logout

router.post('/logout', userController.logout)
module.exports = router