import express from "express";
import bodyParser from "body-parser";
import connexion from "./bdd/connexion";
import factoryRoutes from "./Controller/userController";

connexion;

export const app = express();

app.use(bodyParser.json());
app.use("/");
