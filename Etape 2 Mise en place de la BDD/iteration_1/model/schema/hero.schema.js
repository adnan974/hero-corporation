const mongoose = require('mongoose');


const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    level: Number

})

module.exports = mongoose.model('Heroes', heroSchema);