const Heroes = require('../model/schema/hero.schema')

async function getHeroesController  (req,res){
   
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

module.exports = { getHeroesController, postHeroeController, deleteHeroeController, updateHeroeController}