const express = require('express');
const { getMissionsController,postMissionsCOntroller } = require('../controllers/missions.controller');
const router = express.Router();

router
.route('/')
.get(getMissionsController)
.post(postMissionsCOntroller)

module.exports = router;