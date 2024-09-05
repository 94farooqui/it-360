import { getAlltickets, getAssetTickets, getTicketDetails } from "@/services/api"
import { useEffect, useState } from "react"

const useTickets = (assetId) => {

    const [tickets, setTickets] = useState(null)
    const [ticketDetails,setTicketDetails] = useState(null)

 

    useEffect(() => {

        //to be used on the tickets wall
        const fetchAllTickets = async () => {
            const data = await getAlltickets()
            if(data){
                setTickets(data)
            }
        }

        const fetchTicketDetails = async (ticketId) => {
            const data = await getTicketDetails(ticketId)
            if(data){
                setTicketDetails(data)
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
        fetchAllTickets()
        fetchTicketDetails()
        fetchAssetTickets(assetId)
    }, [])

    return ({tickets,setTickets,ticketDetails,setTicketDetails})

}

export default useTickets