import { sampleTickets } from '@/assets/data/data'
import PageHeader from '@/components/PageHeader'
import { TicketCard } from '@/components/tickets/TicketCard'
import { TicketFilter } from '@/components/tickets/TicketFilter'
import { Button } from '@/components/ui/button'
import useTickets from '@/hooks/useTickets'
import { getAlltickets } from '@/services/api'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'


const Tickets = () => {
  let [searchParams, setSearchParams] = useSearchParams({filter:"All"});
  const [tickets,setTickets] = useState()
  const filter = searchParams.get("filter")

  useEffect(()=>{
    const showTickets = async () => {
      const data = await getAlltickets()
    if(data){
      //console.log(data.tickets)
      if(filter == "All"){
        setTickets(data.tickets)
      }
      else {
        let data = data.tickets.filter(ticket => ticket.status == filter)
        setTickets(data)
      }
    }
      
      
    }
    showTickets()
  },[filter])
  //const [ticketFilter,setTicketFilter] = useState("all")

  if(!tickets){
    return <h2>Ladoing</h2>
  }
  return (
    <div className='flex flex-col p-4'>
     <PageHeader>
        <h2 className='text-2xl font-semibold text-slate-600'>{filter} Tickets</h2>
        <div className='flex gap-2'>
        <TicketFilter filter={filter} setSearchParams={setSearchParams} />
        </div>
        </PageHeader>
      <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 py-4'>
        {tickets.map((ticket,index) => <TicketCard key={index} ticket={ticket} />)}
        {/* <TicketCardSmall setIsTicketOpen={setIsTicketOpen} setCurrentOpenTicket={setCurrentOpenTicket} key={index} ticket={ticket} /> */}

      </div>
      <Outlet/>
    </div>
  )
}

export default Tickets
