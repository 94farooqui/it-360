import { sampleTickets } from '@/assets/data/data'
import { TicketCard } from '@/components/tickets/TicketCard'
import { TicketFilter } from '@/components/tickets/TicketFilter'
import React from 'react'

const Tickets = () => {
  return (
    <div className='flex flex-col py-4'>
      <div className='w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm flex items-center justify-between'>
        <h2>All Tickets</h2>
        <TicketFilter />
      </div>
      <div className='flex gap-4 flex-wrap py-4'>
        {sampleTickets.map(ticket => <TicketCard ticket={ticket} />)}

      </div>
    </div>
  )
}

export default Tickets
