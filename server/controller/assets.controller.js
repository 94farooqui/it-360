import Asset_Category from "../model/assetCategory.model.js"
import Asset_Type from "../model/assetType.model.js"


export const getAllTAssets = (req,res) => {
    console.log("Req received",req.body)
    return res.status(200).json({"msg":"Geting all assets"})
}

export const addAsset = (req,res) => {
    console.log("Req received",req.body)
}

export const getAllAssetCategories = async (req,res) => {
    try{
        const categories = await Asset_Category.find()
        if(categories){
            return res.status(200).json(categories)
        }
        else return res.status(404).json({msg:"Failed to fetch"})
    }
    catch(error){
        console.log(error)
    }
}
export const addAssetCategory = async (req,res) => {
    console.log("Adding category")
    console.log("Req Body",req.body)
    try{
        const newCategory = await Asset_Category(req.body)
        const added = await newCategory.save()
        if(added){
            return res.status(200).json(newCategory)
        }
    }
    catch(err){
        console.log(err)
        return res.status(401).json({msg:"Failed"})
    }
    
}

export const getAllAssetTypes = async (req,res) => {
    try{
        const types = await Asset_Type.find()
        if(types){
            return res.status(200).json(types)
        }
        else return res.status(404).json({msg:"Failed to fetch"})
    }
    catch(error){
        console.log(error)
    }
}

export const addAssetType = async (req,res) => {
    try{
        const newType = await Asset_Type(req.body)
        const added = await newType.save()
        if(added){
            return res.status(200).json(newType)
        }
    }
    catch(err){
        console.log(err)
        return res.status(401).json({msg:"Failed"})
    }
}



