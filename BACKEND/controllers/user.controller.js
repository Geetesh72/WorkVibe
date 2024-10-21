import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname|| !email || !phoneNumber|| !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success :false
            })
        }      
        //57.16
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exist with this email.",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
            

        })
    } catch (error) {
        
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password,role} = req.body;

        if(!email ||  !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success :false
            })
        }   
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message :"Incorrect email or password.",
                success:false,


            })
        }

        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message :"Incorrect email or password.",
                success:false,


            })
        }
        //check role is correct or not
        if(role!=user.role){
            return res.status(400).json({
                message:"Account doesn't exist with current role .",
                success:false
                

            })
        }
        const tokenData={
            userId:user._id

        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})



        
    } catch (error) {
        
    }

}





