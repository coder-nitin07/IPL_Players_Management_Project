const express = require('express');
const upload = require('../middleware/cloudinaryMiddleware');
const { uploadFile } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizedRoles = require('../middleware/roleMiddleware');
const fileRouter = express.Router();

fileRouter.post('/uploadFile', authMiddleware,authorizedRoles, upload.single('file'), uploadFile);

module.exports = { fileRouter };