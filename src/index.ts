import express from "express";
import { router } from "./router";
import { json, urlencoded } from "body-parser";
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({extended: true})); 
app.use(router);

app.listen(1234);