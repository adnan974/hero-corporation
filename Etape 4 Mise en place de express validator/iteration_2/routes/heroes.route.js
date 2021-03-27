const { getHeroesController, postHeroeController, deleteHeroeController, updateHeroeController, addNewMissionToHero, addMissionToHero} = require('../controllers/heroes.controller');
const express = require('express');
const heroValidationRules = require('../validators/hero.validation.rules');
const validationChecker = require('../validators/validation.checker');
const router = express.Router();


//#Iteration_3_mise_en_place_systeme_de_route:
//En fonction de la requete, on redirige vers des controller



router
.route('/')
.get(getHeroesController)
    .post(
        //#Iteration_2_mise_en_place_de_express_validator
        // le .post va executer userValidationRules() qui contient les regles de valdiation des 
        // hero.( comme ca elle est reutilisable). Ensuite on va checker si les regles ont trouvé des
        // erreurs grace à validationChecker
        // Remarque: 
        //   - tuto suivi pour mettre ca en place comme ça : https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go
        //   - J'ai voulu le validationChecker directement dans userValidationRules
        //      mais je n'ai pas reussi. J'ai l'impressio que la fonctio check
        //      fonctionne de maniere particulière

        heroValidationRules(),
        validationChecker,
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