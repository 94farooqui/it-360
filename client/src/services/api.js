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



export const addCategory = async (category) => {
    
}