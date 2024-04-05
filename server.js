import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import MongoDBConnect from "./configs/MongoDBConnect.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// env var
const PORT = process.env.PORT || 6060

// donenv config
dotenv.config();

// server
const server = new ApolloServer({
    typeDefs,
    resolvers
});


// server listen
const serverListen = async () =>{
    await startStandaloneServer(server, {
        listen  : {
            port : PORT

        }
    });
    MongoDBConnect()
    console.log(`Apollo Server is running on PORT ${PORT}`.bgGreen.white);
}
serverListen();