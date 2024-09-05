import AssetDetailsCard from '@/components/assets/AssetDetailsCard'
import AssetTicketContainer from '@/components/assets/AssetTicketContainer'
import AssetTickets from '@/components/assets/AssetTickets'
import { RootContext } from '@/context/RootContext'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const AssetDetails = () => {
    //const {id} = useParams()
    const {currentTicket,setCurrentTicket} = useContext(RootContext)
    const [isTicketOpen,setIsTicketOpen] = useState(false)
    const [currentOpenTicket,setCurrentOpenTicket] = useState()
    const location = useLocation()
    const asset = location.state?.asset
    useEffect(()=>{
      console.log(currentTicket)
    },[])
  return (
    <div className='py-4 flex flex-col gap-8'>
        <AssetDetailsCard asset={asset} />
      <AssetTickets setIsTicketOpen={setIsTicketOpen} setCurrentOpenTicket={setCurrentOpenTicket} assetId={asset._id}/>
        {isTicketOpen && <AssetTicketContainer asset={asset} ticket={currentOpenTicket} setIsTicketOpen={setIsTicketOpen} />}
    </div>
  )
}

export default AssetDetails

// {
//     assetName: "Office Printer",
//     assetCategory: "Hardware",
//     assetType: "Printer",
//     assetSerial: "PR123456",
//     description: "HP LaserJet Pro MFP",
//     assetVendor: {
//         name: "HP",
//         logoImage: "hp-logo.png",
//         email: "support@hp.com",
//         contact_number: "+1-800-HP-INFO"
//     }
// },
