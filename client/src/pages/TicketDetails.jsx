import TicketDetail from '@/components/tickets/TicketDetail'
import { RootContext } from '@/context/RootContext'
import { getTicketDetails } from '@/services/api'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TicketDetails = () => {
    const {id} = useParams()
    //const {currentTicket,setCurrentTicket} = useContext(RootContext)
    const [ticketDetails,setTicketDetails] = useState(null)

    useEffect(()=>{
      const fetchTicketDetails = async () => {
        const data = await getTicketDetails(id)
        if(data){
          console.log(data)
          setTicketDetails(data.data)
        }
      }
      fetchTicketDetails(id)
      console.log("CurrentTicket",ticketDetails)
    },[])
  return (
    <div className='h-full'>
      {ticketDetails && <TicketDetail ticket={ticketDetails}/>}
    </div>
  )
}

export default TicketDetails
