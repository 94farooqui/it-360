import React from 'react'
import { Button } from '../ui/button'

const AssetTickets = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold text-slate-600'>AssetTickets</h2>
        <button className='border bg-white text-sm text-slate-600 font-semibold p-2 rounded-lg'>New Ticket</button>
        </div>
        <div className='bg-white mt-2 rounded-lg px-8 py-4'>
            No tickets found
        </div>
    </div>
  )
}

export default AssetTickets