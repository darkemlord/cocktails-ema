const userController = require('../controllers/users');

const resolvers = {
  Query: {
    getUser: () => {
      console.log('getting user...')
    },
  },
  Mutation:{
    register: (_, { input }) => userController.register(input)
  }
}

module.exports = resolvers;
