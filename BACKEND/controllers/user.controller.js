import { User } from "../models/user.model.js";

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
        const user = await User.findOne({})
    } catch (error) {
        
    }
}