import axios from "axios"

const SERVER = import.meta.env.VITE_SERVER_URL

console.log(SERVER)

export const getAllAssets = async () => {
    const response = await axios.get(`${SERVER}/assets`)
    if(response.status === 200){
        return true
    }
    else false
}

export const addAsset = async (asset) => {
    const response = await axios.post(`${SERVER}/assets`, asset)
    if(response.status === 200){
        return true
    }
    else return false
}
// export const updateAsset = async (updatedAsset) => {
//     const response = await axios.post(`${SERVER}/assets`, asset)
//     if(response.status === 200){
//         return true
//     }
//     else return false
// }
// export const deleteAsset = async (assetId) => {
//     const response = await axios.post(`${SERVER}/assets`, asset)
//     if(response.status === 200){
//         return true
//     }
//     else return false
// }


export const getAllAssetCategories = async () => {
    try{
        const response = await axios.get(`${SERVER}/assets/category`)
        if(response.status == 200){
            return response.data
        }
    }
    catch(error){

    }
}
export const addCategory = async (category) => {
    try{
        //console.log(category)
        const response = await axios.post(`${SERVER}/assets/category`,category)
        if(response.status===200){
            console.log(response)
            return {added:true, msg: "The category added successfully"}
        }
        else return {added:false, msg:"Failed to add category"}
    }
    catch(error){

    }
}

// /asset/asset-type

export const getAllAssetTypes = async () => {
    try{
        const response = await axios.get(`${SERVER}/assets/asset-type`)
        if(response.status == 200){
            return response.data
        }
    }
    catch(error){

    }
}

export const addAssetType = async (type) => {
    try{
        //console.log(category)
        const response = await axios.post(`${SERVER}/assets/asset-type`,type)
        if(response.status===200){
            console.log(response)
            return {added:true, msg: "The asset type added successfully"}
        }
        else return {added:false, msg:"Failed to add asset type"}
    }
    catch(error){

    }
}