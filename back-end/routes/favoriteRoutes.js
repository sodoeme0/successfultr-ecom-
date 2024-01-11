const express = require('express')
const router = express.Router()
const favoriteController = require('../controller/favoriteController')


//get all favorites
router.get('/:email', favoriteController.getAllFavorites)

//add favorite
router.post('/', favoriteController.addFavorite)

//delete favorite
router.delete('/', favoriteController.removeFavorite)

  
module.exports = router