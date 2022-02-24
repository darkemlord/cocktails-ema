const User = require('../models/user');

const register = async (input) => {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();
  const { username, password, email } = newUser;

  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new Error('email already in use');

  const foundUsername = await User.findOne({ username });
  if(foundUsername) throw new Error('username already exists');

}



module.exports = {
  register
};
