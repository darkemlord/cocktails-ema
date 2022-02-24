const resolvers = {
  Query: {
    getUser: () => {
      console.log('getting user...')
    },
  },
  Mutation:{
    register: (_, { input }) =>{
      return input
    }
  }
}

module.exports = resolvers;
