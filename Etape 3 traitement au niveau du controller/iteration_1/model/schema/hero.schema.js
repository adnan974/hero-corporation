const mongoose = require('mongoose');


const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    level: Number,
    rank: String,
    missions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Missions"
        }
    ]

})

module.exports = mongoose.model('Heroes', heroSchema);