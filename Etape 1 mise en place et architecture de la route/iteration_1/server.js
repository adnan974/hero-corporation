// #iteration_1_mise_en_place_systeme_de_route: code sans architecture, j'ai tout mis sur une seule page.
// Problème: le principe DO ONE THING n'est pas respecté

const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("root");
});

app.get("/heroes",(req,res)=>{
    res.send("get heroes");
});

app.post("/heroes",(req,res)=>{
    res.send("post heroes");
});

app.get("/missions",(req,res)=>{
    res.send("get missions")
});

app.post("/missions",(req, res) => {
    res.send("post missions")
});

app.listen(3000,()=>{
    console.log("server is listening");
});