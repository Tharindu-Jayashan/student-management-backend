import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import bodyParser from "body-parser";

dotenv.config();

const app  = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl)

const connection = mongoose.connection;

connection.once("open", ()=> {
    console.log("MongoDB database connection established successfully")
})

app.use("/api/users", userRouter);

