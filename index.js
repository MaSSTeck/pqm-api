import { ApolloServer, gql } from 'apollo-server';
import "./app/config/db";
import { QuestionAPI } from './app/datasource/questionsDataSource'
import { typeDefs } from './app/graph/schema';
import { resolvers } from './app/graph/resolvers/index';
import SERVER_ENV from './app/config/server_env';

// const serverConf = SERVER_ENV['development'];
const serverConf = SERVER_ENV['production'];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => {
        return {
            questionAPI: new QuestionAPI(),
        };
    },
});
console.log("port number:", serverConf.SERVER_PORT);
server.listen(serverConf.SERVER_PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
//auto port
// server.listen({port: process.env.PORT}).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
//   });
