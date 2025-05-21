const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    team: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    runs: {
        type: Number,
        required: true
    },
    image: {    
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ 'Batsman', 'Bowler', 'All-rounder' ],
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;