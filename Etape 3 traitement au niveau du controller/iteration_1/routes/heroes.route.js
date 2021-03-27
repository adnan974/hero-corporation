const { getHeroesController, postHeroeController, deleteHeroeController, updateHeroeController, addNewMissionToHero, addMissionToHero} = require('../controllers/heroes.controller');
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

router
.route('/:heroId/missions/')
.post(addNewMissionToHero)

router
.route('/:heroId/missions/:missionId')
.post(addMissionToHero)


module.exports = router;