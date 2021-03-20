//#Iteration_2:
// Par rapport à l'iteration n°1, on a un peu mieux respecter le DO ONE THIN (à mon avis). 
// Voir les autres du même nom pour plus de détails.
// Le problème: 
//  A mon avis, le problème vient principalement de l'itération 2. Elle redirige toutes les routes de tous les
//  Entry point Je pense que le router devrait connaitre seulement les entry point. A chaque entry point, il 
//  associe un module qui va déléguer le traitement au controller

const express = require('express');
const router = require('./router');
const app = express();

//#iteration_2: 
// On a crée un fichier router qui gére les routes. Des que requete du client arrive, c'est ce module qui va gérer les routes
router(app);

app.listen(3000,()=>{
    console.log('server listening...') 
});