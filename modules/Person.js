const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    work: { type: String, enum: ['chef', 'waiter', 'manager'], required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    salary: { type: Number }
});

const Person = mongoose.model('Person', personSchema);  // Ensure model name matches MongoDB collection
module.exports = Person;
