//Import dependencies
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nama: { type: String },
    hobi: { type: String },
    alamat: { type: String },
    nomer_telp: { type: Number }
  });
  module.exports = mongoose.model('users', userSchema);
