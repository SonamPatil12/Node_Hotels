const mongoose = require('mongoose');

const menuIteamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number,required: true},
    test: { type: String, enum: ['spicy', 'sweet', 'sour'], required: true },
    is_drink: { type: Boolean, default: false },
    ingredient: { type: [String] , default: false},
    num_sales: { type: Number, default: 0 }
})

const MenuIteam = mongoose.model('MenuItem', menuIteamSchema);  // Ensure model name matches MongoDB collection
module.exports = MenuIteam;