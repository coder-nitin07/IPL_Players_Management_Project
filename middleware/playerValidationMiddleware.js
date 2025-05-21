const Joi = require('joi');

const playerValidation = Joi.object({
    name: Joi.string().trim().required(),
    team: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
    runs: Joi.number().integer().required(),
    image: Joi.string().trim().required(),
    role: Joi.string().valid('Batsman', 'Bowler', 'All-rounder').required(),
    salary: Joi.number().positive().required()
});

const validatePlayer = (req, res, next)=>{
    const { error } = playerValidation.validate(req.body);
    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = { validatePlayer };