
//#Iteration_3_mise_en_place_systeme_de_route:
// Par rapport à l'iteration n°1, on a un peu mieux respecter le DO ONE THIN (à mon avis). 


////#Iteration_3_mise_en_place_systeme_de_route:
// Ce module génère seulement les modules
const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('../config.json');


mongoose.connect(dbConfig.database.mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
 });

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Ce module appelle le module de router
router(app)

app.listen(3000,()=>{
    console.log("server linstening...");
});