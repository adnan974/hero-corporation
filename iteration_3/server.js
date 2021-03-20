const express = require('express');
const router = require('../iteration_3/router');
const app = express();

router(app)

app.listen(3000,()=>{
    console.log("server linstening...");
});