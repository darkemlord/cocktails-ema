const resolvers = {
  Query: {
    getUser: () => {
      console.log('getting user...')
    },
  },
}

module.exports = resolvers;
