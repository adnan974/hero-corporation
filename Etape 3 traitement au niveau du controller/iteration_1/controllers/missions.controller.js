const Missions = require('../model/schema/mission.schema');

async function getMissionController(req,res){
    const missionsList= await Missions.find();
    res.status(200).send(missionsList);
}

 function postMissionController(req,res){
    Missions
    .create(req.body)
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
         res.status(500).send(err);

    });

}

function deleteMissionController(req,res){
    Missions
    .deleteOne({_id:req.params.id})
    .then(doc=>{
        res.status(200).send(doc)
    })
    .catch(err=>{
        res.status(500).send(err)
    });

}

function updateMissionController(req,res){
    Missions
    .updateOne({_id:req.params.id},req.body)
    .then(doc=>{
        res.status(200).send(doc);
    })
    .catch(err=>{
        res.status(500).send(err);
    });
}

module.exports = { getMissionController, postMissionController, deleteMissionController, updateMissionController}