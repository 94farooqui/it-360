import Vendor from "../model/vendor.model.js"

export const getAllVendors = async (req,res) => {
    try{
        const vendors = await Vendor.find()
        if(vendors){
            return res.status(200).json(vendors)
        }
        else return res.status(404).json({msg:"Failed to fetch"})
    }
    catch(error){
        console.log(error)
    }
}

export const addVendor = async (req,res) => {
    
    console.log("Req Body",req.body)
    try{
        const newVendor = await Vendor(req.body)
        const added = await newVendor.save()
        if(added){
            return res.status(200).json(newVendor)
        }
    }
    catch(err){
        console.log(err)
        return res.status(401).json({msg:"Failed"})
    }
}