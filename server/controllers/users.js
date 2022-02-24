const User = require('../models/user');

const register = async (input) => {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

}



module.exports = {
  register
};
