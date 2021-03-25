const { getHeroesController, postHeroeController, deleteHeroeController, updateHeroeController} = require('../controllers/heroes.controller');
const express = require('express');
const router = express.Router();


//#Iteration_3:
//En fonction de la requete, on redirige vers des controller

router
.route('/')
.get(getHeroesController)
.post(postHeroeController)

router
.route('/:id')
.delete(deleteHeroeController)
.patch(updateHeroeController)


module.exports = router;