const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greetings: String
    interestingUrls: [String]
    first_name: String
    email: String
    pets: [String]
  }
`;

const data = {
  greetings: "Hello world!",
  interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
  first_name: "John",
  email: "john@example.com",
  pets: ["Mittens", "Doggo", "Birb"],
};

const server = new ApolloServer({
  typeDefs,
  rootValue: data,
  playground: true,
  introspection: true,
});

server
  .listen({ port: PORT })
  .then((result) => console.log(result.url, "result"));
