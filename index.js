import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app  = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl)

const connection = mongoose.connection;

connection.once("open", ()=> {
    console.log("MongoDB database connection established successfully")
})

