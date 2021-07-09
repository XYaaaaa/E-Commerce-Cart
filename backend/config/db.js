require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiefTopology: true
        });

        console.log('MongoDB CONNECTED');
    } catch(error) {
        console.error("MongoDB connection failed");
        process.exit(1);
    }
}

module.exports = connectDB;