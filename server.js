const express = require('express');
const bodyParser = require('body-parser');
const heroesController = require('./controller/heroes.controller');
const router = require('./router');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }))


router(app);

app.listen(3000,()=>{
    console.log("server is listening");
})