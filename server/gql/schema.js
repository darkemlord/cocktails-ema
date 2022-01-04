const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    password: String
    createdAt: String
  }

  type Query {
    # User
    getUser: User
  }
`

module.exports = typeDefs;
