import { RootContext } from "@/context/RootContext"
import { getAllVendors, getTicketComments } from "@/services/api"
import { useContext, useEffect, useState } from "react"

const useComments = () => {

    const { currentTicket,setCurrentTicket} = useContext(RootContext)

    const [ticketComments, setTicketComments] = useState(null)

    useEffect(() => {
        const fetchComments = async (currentTicket) => {
            const ticketId = currentTicket._id
            const data = await getTicketComments(ticketId)
            if(data){
                setTicketComments(data)
            }
        }
        fetchComments()
    }, [ticketComments])

    return ({vendors,setVendors})

}

export default useComments