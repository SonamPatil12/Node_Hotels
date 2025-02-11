const mongoose = require("mongoose");

// Define the mongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/hotels'

// set up mongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listners fo database connection

db.on('connected', () => {
    console.log("Connected to mongoDB")
})

db.on('error', () => {
    console.log("MongoDB Connected error")
})

db.on('disconnected', () => {
    console.log("Connected disconnected")
})

// export database connection

module.exports = db