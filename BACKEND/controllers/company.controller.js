import {Company} from "../models/company.model.js"

export const registerCompany = async(req,res)=>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success:false
            });
        }
            let company = await Company.findOne({name:companyName});
            if(company){
                return res.status(400).json({
                   message:"Company already exists",
                   success:false
                });
            }
            company = await Company.create({
                name:companyName,
                userId:req.id
            });
            return res.status(200).json({
                message :"Company added successfully",
                company,
                success:true
            })
        }
        
     catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Server error",
            success: false,
         });
        
    }
}



export const getCompany = async(req,res)=>{
    try {
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(484),json({
                message:"Companies not Found",
                success:false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
// get company by id 
export const getCompanyById = async (req,res)=>{
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message:"Compnay not there",
                success:false
            })
        }

        return res.status(200).json({
            message:"Company Founded",
            company,
            success:true
        })
        return res.status(200).json({
            companies,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
    }
}


// updating the company 
export const updateCompany = async (req,res)=>{
    try {
        const {name,decription,website,location}=req.body;
        const file =req.file;
    // cloudinary
    const updateData = {name,decription,website,location};

    const company = await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
    if(!company){
        return res.status(404).json({
            message:"Companhy not found ",
            success :false

        })
    }
    return res.status(200).json({
        message:"Company Details Updated",
        success:true
    })
        
    } catch (error) {
        console.log(error);

        
    }
}