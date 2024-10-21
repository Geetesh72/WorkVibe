import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
dotenv.config({})
// we are created server 
const app = express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I am coming from Backend",
//         success:true
//     })

// })
// MIDDLEWARE 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOption={
    origin:"http//localhost:5173",
    Credentials:true
}
app.use(cors(corsOption));



const PORT = process.env.PORT || 3000;
app.listen(PORT ,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`)
    
})