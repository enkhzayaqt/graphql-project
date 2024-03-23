import express from "express";
import cors from "cors";
import { handleLogin } from "./authentication.js";

const PORT = 9000;

const app = express();
app.use(cors(), express.json());

app.post('/login', handleLogin);

app.listen({port:PORT}, ()=>{
    console.log(`Express server is running on port http://localhost:${PORT}`)
})