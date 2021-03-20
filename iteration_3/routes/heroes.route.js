const {getHeroesController,postHeroesController} = require('../controllers/heroes.controller');
const express = require('express');
const router = express.Router();

router
.route('/')
.get(getHeroesController)
.post(postHeroesController)


module.exports = router;