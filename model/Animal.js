// Austin Pyzer, Bernie Warren 
// 04-19-24
// Lab 4 - An animal database access page 
// utilizing mongo, node modules, and pug templates.

const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    Zoo: {type: String, required: true },
    scientificName: {type: String, required: true },
    commonName: { type: String, required: true },
    givenName: { type: String, required: true },
     gender: { type: String, required: true },
     dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    isTransportable: { type: Boolean, required: true }

});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
