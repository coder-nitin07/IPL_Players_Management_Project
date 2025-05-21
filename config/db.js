const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Successfully connect to the Database");
    } catch (err) {
        console.error('Error while connecting to the database', err);
    }
};

module.exports = connectDB;