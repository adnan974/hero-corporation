const heroesRoute = require('./routes/heroes.route');
const missionsRoute = require('./routes/missions.route');


const HEROES_ENTRY_POINT = '/heroes';
const MISSIONS_ENTRY_POINT = '/missions';

function router(app){
    app.use(HEROES_ENTRY_POINT,heroesRoute);  
    app.use(MISSIONS_ENTRY_POINT, missionsRoute);
}

module.exports = router;