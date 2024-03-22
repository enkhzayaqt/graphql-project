import express from "express";
import cors from "cors";

const PORT = 9000;

const app = express();
app.use(cors(), express.json());
app.listen({port:PORT}, ()=>{
    console.log(`Express server is running on port http://localhost:${PORT}`)
})