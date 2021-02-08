const { ApolloServer } = require('apollo-server');

const typeDefs = `
    type Query {
        greetings: String
    }
`
const server = new ApolloServer({ typeDefs });

server.listen({ port: 4000 }).then((result) => console.log(result.url, 'result'))