const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    randomDiceThrow: Int
    counter: Int
    fewRandomDiceThrows: [Int]
    e: Float
    eulersSeries: [Float]
  }
`;

const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);

const getCount = () => Math.random() * (7 - 3) + 3;

const makeThrows = (count) => {
  let throwsTable = [];
  for (let i = 0; i < count; i++) {
    throwsTable.push(getRandomDiceThrow());
  }
  return throwsTable;
};

const getThrows = () => {
  const count = getCount();
  const throws = makeThrows(count);
  return throws;
};

let counter = 1;

const getCounterValue = () => counter++;

const getEulersSeries = () => {
  let eulersTable = [];
  for (let i = 1; i < 1000; i++) {
    eulersTable[i - 1] = Math.pow(1 + 1 / i, i);
  }
  return eulersTable;
};
const rootValue = () => {
  return {
    greeting: "Hello world!",
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    counter: getCounterValue(),
    fewRandomDiceThrows: getThrows(),
    e: Math.E,
    eulersSeries: getEulersSeries(),
  };
};

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
