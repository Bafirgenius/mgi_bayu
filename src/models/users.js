//Import dependencies
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    age: { type: Number }
  });
  module.exports = mongoose.model('users', userSchema);
