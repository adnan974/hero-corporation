const { getHeroesController, postHeroeController, deleteHeroeController, updateHeroeController, addNewMissionToHero, addMissionToHero} = require('../controllers/heroes.controller');
const { check } = require('express-validator');
const express = require('express');
const router = express.Router();


//#Iteration_3_mise_en_place_systeme_de_route:
//En fonction de la requete, on redirige vers des controller


//#Iteration_1_mise_en_place_de_express_validator
// Problèmes: 
//   - Si le package venait à etre modifié il faudrait changer le code qui est ici mais aussi
//      Celui qui est dans le controller (voir tag)
//   - Si les même regles de l'étape 1 (voir tag) dans une autre partie, j'aurai de la duplication 
//     de code

router
.route('/')
.get(getHeroesController)
    .post(
        //#Iteration_1_mise_en_place_de_express_validator
        // Fonctionnement: 
        // Etape 1: On verifie avec la fonction check si il y'a des problèmes
        [check('name').isLength({ min: 3 }),check('rank').isNumeric()],
        postHeroeController
        )

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