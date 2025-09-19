import express from "express";
import { router } from "./routes/routes";
import cors from "cors"
import { connectDB } from "./data/letters";

const app = express();

export default function createApp(){

    app.use(cors()); // Permite requisições de qualquer origem

    app.use(express.json()); // Permite receber JSON no body

    app.use("/api",router); // Rotas

    connectDB();// Conecta ao MongoDB

    return app;
};


