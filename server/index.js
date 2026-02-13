import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const mongoDBConn = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log("mongoDB is connected💖")
    }
}
mongoDBConn()

//apis

//health api
app.get("/api/v1/healths",
    (req,res)=>{
        res.json({
            success:true,
            message:'server is healthy🤗'
        })
    }
)



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});




