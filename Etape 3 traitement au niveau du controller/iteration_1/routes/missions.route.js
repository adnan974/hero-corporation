const express = require('express');
const { getMissionController, postMissionController, deleteMissionController, updateMissionController } = require('../controllers/missions.controller');
const router = express.Router();

router
.route('/')
.get(getMissionController)
.post(postMissionController)

router
.route('/:id')
.delete(deleteMissionController)
.patch(updateMissionController)

module.exports = router;