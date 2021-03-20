const {getHeroesController,postHeroesController} = require('./controllers/heroes.controller');
const {getMissionsController,postMissionsController} = require('./controllers/missions.controller');
const express = require('express');


//#iteration_2: 
//Ce module s'occupe d'assigner des route vers des controllers. Il s'occupe exclusivement de la redirection.
const HEROES_ENTRY_POINT = "/heroes"
const MISSIONS_ENTRY_POINT = "/missions"
function router(app){
    app.get(HEROES_ENTRY_POINT, getHeroesController);
    app.post(HEROES_ENTRY_POINT,postHeroesController);

    app.get(MISSIONS_ENTRY_POINT,getMissionsController);
    app.post(MISSIONS_ENTRY_POINT, postMissionsController);
}

module.exports = router;