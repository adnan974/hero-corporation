

async function getHeroesController  (req,res){
    res.send('get heroes');
}

function postHeroesController(req,res){
    res.send('post heroes');
}

module.exports = { getHeroesController, postHeroesController}