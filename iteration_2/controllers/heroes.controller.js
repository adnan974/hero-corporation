//#iteration_2:
// Ici on met en place le controller, il va traiter la requete que le router lui envoie
function getHeroesController(req,res){
    res.send('get heroes');

}

function postHeroesController(req,res){
    res.send('post heroes')
}

module.exports = {getHeroesController,postHeroesController};