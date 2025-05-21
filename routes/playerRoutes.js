const express = require('express');
const { createPlayer, getPlayer, updatePlayer, deletePlayer, getAllPlayers } = require('../controllers/playerController');
const { validatePlayer } = require('../middleware/playerValidationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const authorizedRoles = require('../middleware/roleMiddleware');
const validatePlayerUpdation = require('../middleware/updatePlayerValidation');
const playerRouter = express.Router();

playerRouter.post('/', authMiddleware, authorizedRoles, validatePlayer, createPlayer);
playerRouter.get('/:id/description', authMiddleware, getPlayer);
playerRouter.patch('/:id', authMiddleware, authorizedRoles, validatePlayerUpdation, updatePlayer);
playerRouter.delete('/:id', authMiddleware, authorizedRoles, deletePlayer);
playerRouter.get('/', authMiddleware, getAllPlayers);

module.exports = { playerRouter };