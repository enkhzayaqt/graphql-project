import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloExpressMiddleware } from '@apollo/server/express4';
import express from "express";
import cors from "cors";
import { handleLogin } from "./authentication.js";
import knex from "./lib/db.js";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";


const { schema } = knex

const PORT = 9000;

const app = express();
app.use(cors({
    origin: ['http://localhost:3000']
}), express.json());

app.post('/login', handleLogin);

const typeDefs = await readFile('./schema.graphql', 'utf-8')
const apolloServer = new ApolloServer({typeDefs, resolvers,});
await apolloServer.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors(), express.json(), apolloExpressMiddleware(apolloServer));

app.listen({port:PORT}, ()=>{
    console.log(`Express server is running on port http://localhost:${PORT}`);
    console.log(`Apollo graphql server is running on port http://localhost:${PORT}/graphql`);
})