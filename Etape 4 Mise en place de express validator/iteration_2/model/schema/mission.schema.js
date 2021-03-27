const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    rank:{
        type:String,
        required:true
    },
   
});

module.exports = mongoose.model("Missions",missionSchema);