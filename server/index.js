const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config({ path: ".env" });

console.log(process.env.MONGO_DB);

const server = async () => {
  const app = express();
  const serverApollo = new ApolloServer({

  })
}
