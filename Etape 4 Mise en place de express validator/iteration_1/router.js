const heroesRoute = require('./routes/heroes.route');
const missionsRoute = require('./routes/missions.route');


//#Iteration_3:
// Le router utilise le "app" de express et redirige en fonction 
// des entry point les route corrspondantes
function router(app){
    app.use('/heroes',heroesRoute);  
    app.use('/missions', missionsRoute);
}

module.exports = router;