const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema( {
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  }
})

module.exports = mongoose.model('User', userSchema)
