const express = require('express');
const connectDB = require('./config/db');
const { authRouter } = require('./routes/authRoutes');
const { playerRouter } = require('./routes/playerRoutes');
const { fileRouter } = require('./routes/fileRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const app = express();

app.use(express.json());

// dotenv config
require('dotenv').config();

// Database connection
connectDB();

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use('/auth', authRouter);
app.use('/players', playerRouter);
app.use('/upload', fileRouter);

app.get('/', (req, res)=>{
    res.send('This is my IPL Players Management API Project.')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`App is listen on PORT ${PORT}`);
});