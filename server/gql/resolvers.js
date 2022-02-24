const resolvers = {
  Query: {
    getUser: () => {
      console.log('getting user...')
    },
  },
  Mutation:{
    register: (_, { input }) =>{
      console.log('returning taste')
      return input
    }
  }
}

module.exports = resolvers;
