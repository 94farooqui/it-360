import axios from "axios"

const SERVER = import.meta.env.VITE_SERVER_URL

//console.log(SERVER)

export const getAllAssets = async () => {
    //console.log("Getting All Assets")
    const response = await axios.get(`${SERVER}/assets`)
    if(response.status === 200){
        return response.data
    }
    else return false
}

export const addAsset = async (asset) => {
    console.log("Adding Asset")
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
            //console.log(response.data)
            return response.data
        }
    }
    catch(error){

    }
}

export const addAssetType = async (type) => {
    try{
        console.log(type)
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

export const getAllVendors = async () => {
    try{
        const response = await axios.get(`${SERVER}/vendors`)
        if(response.status == 200){
            return response.data
        }
    }
    catch(error){

    }
}

export const addNewVendor = async (newVendor) => {
    console.log(newVendor)
    try{
        
        const response = await axios.post(`${SERVER}/vendors`,newVendor)
        if(response.status===200){
            console.log(response)
            return {added:true, msg: "The vendor added successfully"}
        }
        else return {added:false, msg:"Failed to add new vendor"}
    }
    catch(error){

    }
}

export const getAlltickets = async () => {
    try{
        const response = await axios.get(`${SERVER}/tickets`)
        if(response.status == 200){
            return response.data
        }
    }
    catch(error){

    }
}

export const getAssetTickets = async (assetId) => {
    //console.log("Getting tickets for asset")
    try{
        const response = await axios.get(`${SERVER}/tickets/${assetId}`)
        if(response){

            if(response.status == 200){
                const {data} = response
                //console.log(data)
                return {result : true, data: data}
             }
             else return {result:false}
        }
 
        
    }
    catch(error){

    }
}

export const getTicketDetails = async (ticketId) => {
    console.log(`Getting ticket details for ${ticketId}`)
    try{
        const response = await axios.get(`${SERVER}/tickets/${ticketId}/info`)

            if(response.status == 200){
                const {data} = response
                console.log(data)
                return {result : true, data: data}
             }
             else return {result:false}
        }
    catch(error){

    }
}
export const addTicketComment = async (comment, ticketId) => {
    console.log(comment, ticketId)
    const response = await axios.post(`${SERVER}/tickets/${ticketId}/comments`,comment)
    console.log(response)
    if(response.status == 200){
        return true
    }
}

export const addAssetTicket = async (assetTicket) => {
    try{
        console.log(assetTicket)
        const response = await axios.post(`${SERVER}/tickets`,assetTicket)
        if(response.status===200){
            console.log(response)
            return {added:true, msg: "The ticket added successfully"}
        }
        else return {added:false, msg:"Failed to add new ticket"}
    }
    catch(error){

    }
    
}

export const getTicketComments = async (ticketId) => {
    try{
        const response = await axios.get(`${SERVER}/tickets/${ticketId}/comments`)
        if(response.status == 200){
            return response.data
        }
        else return []
    }
    catch(error){
        return false
    }
}