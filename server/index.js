// import cors from "cors";
// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";
// import cookieParser from "cookie-parser";
// import healthApi from "./src/controllers/health.js";
// import { registerApi, loginApi, refreshTokenHandler } from "./src/controllers/signup.js";
// import { addService, getservices, getservicesbyid, deleteservice } from "./src/controllers/service.js";
// import { verifyToken, isAdmin } from "./src/middlewares/authMiddleware.js";
// dotenv.config();

// const app = express();
// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());

// connectDB();
// // const mongoDBConn = async () =>{
// //     const conn = await mongoose.connect(process.env.MONGODB_URL)
// //     if(conn){
// //         console.log("mongoDB is connected💖")
// //     }
// // }
// // mongoDBConn()

// //apis

// //health api
// app.get("/api/v1/healths",healthApi)
// app.post("/api/v1/registers",registerApi)  
// app.post("/api/v1/logins",loginApi) 
// app.post("/api/v1/refresh", refreshTokenHandler)
// app.post("/api/v1/add-service",verifyToken, isAdmin, addService)
// app.get("/api/v1/getservice", getservices)
// app.get("/api/v1/getservice/:_id", getservicesbyid)
// app.delete("/api/v1/deleteservice/:id", deleteservice)

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, ()=>{
//     console.log(`server is running on ${PORT}`)
// });

import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import healthRoutes from "./src/routes/healthRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/service", serviceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
