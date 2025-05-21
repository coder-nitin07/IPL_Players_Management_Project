const { v4: uuidv4 } = require('uuid');
const Player = require('../models/playerSchema');
const { getFilterFromQuery } = require('../utils/getFilterFromQuery');

// Create the Player
const createPlayer = async (req, res)=>{
    try {
        const { name, team, country, runs, image, role, salary } = req.body;
        const generatedID = uuidv4();

        const newPlayer = new Player({
            id:generatedID,
            name,
            team,
            country,
            runs,
            image,
            role,
            salary
        });

        await newPlayer.save();
        res.status(201).json({ message: 'Player created successfully', Player: newPlayer });
    } catch (err) {
        res.status(500).json({ message: 'Failed to create the Player', error: err.message });
    }
};

// Get Player Details
const getPlayer = async (req, res)=>{
    try {
        const { id } = req.params;
        const player = await Player.findById(id);

        if(!player){
            return res.status(404).json({ message: 'Player not found' });
        }

        res.status(200).json({ message: 'Successfully get the Player.', Player: player });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update the Player
const updatePlayer = async (req, res)=>{
    try {
        const { id } = req.params;
        const player = await Player.findById(id);
        
        if(!player){
            return res.status(404).json({ message: 'Player not found' });
        }

        const { name, team, country, runs, image, role, salary } = req.body;
        
        if(name !== undefined) player.name = name;
        if(team !== undefined) player.team = team;
        if(country !== undefined) player.country = country;
        if(runs !== undefined) player.runs = runs;
        if(image !== undefined) player.image = image;
        if(role !== undefined) player.role = role;
        if(salary !== undefined) player.salary = salary;

        const updatedPlayer = await player.save();
        res.status(200).json({ message: 'Player updated successfully', updatedPlayer });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete the Player
const deletePlayer = async (req, res)=>{
    try {
        const { id } = req.params;
        const player = await Player.findById(id);

        if(!player){
            return res.status(404).json({ message: 'Player not found' });
        }

        const deletedPlayer = await Player.findByIdAndDelete(id);
        res.status(200).json({ message: 'Player deleted Successfully', deletedPlayer });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get All Players
const getAllPlayers = async (req, res)=>{
    try {
        const filter = getFilterFromQuery(req.query);

        const total = await Player.countDocuments(filter);
        if(total === 0){
            return res.status(200).json({ message: "No Players found", players: [] });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        let sort = {};
        
        if(req.query.sortBy === 'runs'){
            sort.runs = -1;
        } else if(req.query.sortBy === 'salary'){
            sort.salary = -1;
        }

        const players = await Player.find(filter)
                                    .sort(sort)
                                    .skip(skip)
                                    .limit(limit);

        res.status(200).json({ page, limit, total, players });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch the Players Data', error: err.message });
    }
};

module.exports = { createPlayer, getPlayer, updatePlayer, deletePlayer, getAllPlayers };