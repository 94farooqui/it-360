import { getAlltickets, getAssetTickets, getTicketDetails } from "@/services/api"
import { useEffect, useState } from "react"

const useTickets = (assetId) => {

    const [tickets, setTickets] = useState(null)
    const [assetTickets,setAssetTickets] = useState(null)
    const [ticketDetails,setTicketDetails] = useState(null)

    const fetchAllTickets = async () => {
        const data = await getAlltickets()
        if(data){
            setTickets(data)
        }
    }

    const fetchTicketDetails = async (ticketId) => {
        const data = await getTicketDetails(ticketId)
        if(data){
            setAssetTickets(data)
        }
    }

    const fetchAssetTickets = async (assetId) => {
        console.log(assetId)
        const {result , data} = await getAssetTickets(assetId)
        if(result){
            //console.log(data)
            setTickets(data)
        }
    }

    useEffect(() => {

       

    }, [])


    return ({tickets,ticketDetails,assetTickets,fetchAllTickets,fetchTicketDetails,fetchAssetTickets})

}

export default useTickets