const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (input) => {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();
  const { username, password, email } = newUser;

  //looking for email and users
  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new Error('email already in use');

  const foundUsername = await User.findOne({ username });
  if(foundUsername) throw new Error('username already exists');

  //encrypt password

  const salt = bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try{
    const user = new User(newUser);
    user.save();
    console.log('user saved');
    return user;
  } catch(error) {
    console.log(error)
  }
}



module.exports = {
  register
};
