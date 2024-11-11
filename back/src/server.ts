import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import cors from "cors";

const server = express();

server.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  }));

server.use(morgan("dev"));
server.use(express.json());

server.use(indexRouter);

export default server;
