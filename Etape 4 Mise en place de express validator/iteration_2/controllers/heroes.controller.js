const Heroes = require('../model/schema/hero.schema');
const Missions = require('../model/schema/mission.schema');


async function getHeroesController(req,res){
   
    let heroesList;

    // TODO à améliorer. Si je commence à mettre plusieurs paramètre, je m'en sort plus avec cette structure
    if (req.query.rank){
       heroesList = await Heroes.find({
           rank: req.query.rank
        });
    }else{
        heroesList = await Heroes.find();

    }

    
    res.status(200).send(heroesList);
}


function postHeroeController(req,res){

    Heroes
    .create(req.body)
    .then(doc=>{
        res.status(201).send(doc);
    })
    .catch(err=>{
        res.status(201).send(err);
    })
    
}

function deleteHeroeController(req,res){
    Heroes
    .deleteOne({_id:req.params.id})
    .then(doc=>{
        res.status(200).send(doc);
    })
    .catch(err=>{
        res.status(500).send(err);
    });
}

function updateHeroeController(req,res){
    Heroes
    .updateOne({_id: req.params.id},req.body)
    .then(doc=>{
        res.status(200).send(doc);
    })
    .catch(err=>{
        res.status(500).send(err);
    });
}

async function addNewMissionToHero(req,res){
    let newMission = await Missions.create(req.body);
    let heroes  = await Heroes.findById(req.params.heroId);
    await heroes.missions.push(newMission);
    return heroes.save();

}



function addMissionToHero(req,res){
    console.log(req.params.heroId);
    console.log(req.params.missionId);


    let heroFound;
    let missionFound;
    Missions.findById(req.params.missionId)
    .then( mission=>{
        missionFound = mission
        return Heroes.findById(req.params.heroId);

    })
    .then(hero=>{
        heroFound = hero;
        heroFound.missions.push(missionFound);
        return heroFound.save();
    })
    .then(response=>{
        res.status(201).json(response);
    })
    .catch(err=>{
        res.status(500).send(err);
    })

}

module.exports = { 
    getHeroesController,
    postHeroeController,
    deleteHeroeController,
    updateHeroeController,
    addNewMissionToHero,
    addMissionToHero
    }