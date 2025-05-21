const Joi = require('joi');

const updatePlayer = Joi.object({
    name: Joi.string().trim(),
    team: Joi.string().trim(),
    country: Joi.string().trim(),
    runs: Joi.number().integer(),
    image: Joi.string().uri(),
    role: Joi.string().valid('Batsman', 'Bowler', 'All-rounder'),
    salary: Joi.number().positive()
}).min(1);

const validatePlayerUpdation = (req, res, next)=>{
    const { error } = updatePlayer.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = validatePlayerUpdation;