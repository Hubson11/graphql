const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const rootValue = require("./rootValue");
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
