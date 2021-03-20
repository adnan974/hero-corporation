
const express = require('express');

function heroesController(req,res){
    console.log("je suis dans le controllers");
    res.send("heroes controller");
}
    

module.exports = heroesController;