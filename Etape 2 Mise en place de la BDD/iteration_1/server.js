
//#Iteration_3_mise_en_place_systeme_de_route:
// Par rapport à l'iteration n°1, on a un peu mieux respecter le DO ONE THIN (à mon avis). 


////#Iteration_3:
// Ce module génère seulement les modules
const express = require('express');
const router = require('../iteration_1/router');
const mongoose = require('mongoose');
const DATABASE_NAME = require('./const/db.config');
//const Heroes = require('./model/schema/hero.schema');

mongoose.connect(DATABASE_NAME, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
 });


const app = express();


// Ce module appelle le module de router
router(app)

app.listen(3000,()=>{
    console.log("server linstening...");
});