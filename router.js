const express = require('express');
const heroesController =  require('./controller/heroes.controller');

const HEROES_ENTRY_POINT = "/heroes"

function router(app){
    app.get(HEROES_ENTRY_POINT, heroesController)
}

module.exports = router;