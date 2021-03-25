function getMissionsController(req,res){
    res.send('get missions');
}

function postMissionsCOntroller(req,res){
    res.send('post missions');
}

module.exports = { getMissionsController, postMissionsCOntroller}