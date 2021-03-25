
function getMissionsController(req,res){
    res.send('get missions');
}

function postMissionsController(req,res){
    res.send('post missions');
}

module.exports = {getMissionsController,postMissionsController}