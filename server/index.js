import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const mongoDBConn = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log("mongoDB is connected😍")
    }
}
mongoDBConn()

const PORT = process.env.BASE_URL || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});




