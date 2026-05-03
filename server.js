const mongoose = Require ('mongoose');
Require ('dontev').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected: ${conn.connection.host}');
    } catch (error) {
        console.log('MongoDB connection error:', error);
        process.getMaxListeners(1);

    }
};

connectDB();

const express = Require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


Require ('dotenv').config();
const app = require ('./src/app');
const connectDB = require ('.src/config/database');
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server running on port $ {PORT}');
    });
});








