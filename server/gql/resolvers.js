const resolvers = {
  Query: {
    getUser: () => {
      console.log('getting user...')
    },
  },
  Mutation:{
    register: (_, { input }) =>{
      console.log('mutation done')
    }
  }
}

module.exports = resolvers;
