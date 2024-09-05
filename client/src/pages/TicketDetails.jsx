import TicketDetailsPage from '@/components/tickets/TicketDetailsPage'
import React from 'react'
import { useParams } from 'react-router-dom'

const TicketDetails = () => {
    const {id} = useParams()
  return (
    <div>
      <TicketDetailsPage/>
    </div>
  )
}

export default TicketDetails
