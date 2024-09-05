import { getAlltickets, getAssetTickets } from "@/services/api"
import { useEffect, useState } from "react"

const useTickets = (assetId) => {

    const [tickets, setTickets] = useState(null)

 

    useEffect(() => {

        //to be used on the tickets wall
        const fetchTickets = async () => {
            const data = await getAlltickets()
            if(data){
                setTickets(data)
            }
        }


        //to be used inside ticket details
        const fetchAssetTickets = async (assetId) => {
            const {result , data} = await getAssetTickets(assetId)
            if(result){
                //console.log(data)
                setTickets(data)
            }
        }
        fetchTickets()
        fetchAssetTickets(assetId)
    }, [])

    return ({tickets,setTickets})

}

export default useTickets