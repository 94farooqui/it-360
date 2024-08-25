

export const getAllTAssets = (req,res) => {
    console.log("Req received",req.body)
    return res.status(200).json({"msg":"Geting all assets"})
}

export const addAsset = (req,res) => {
    console.log("Req received",req.body)
}