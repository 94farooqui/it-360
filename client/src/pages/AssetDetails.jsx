import AssetDetailsCard from '@/components/assets/AssetDetailsCard'
import AssetTickets from '@/components/assets/AssetTickets'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const AssetDetails = () => {
    const {id} = useParams()
    const location = useLocation()
    const asset = location.state?.asset
  return (
    <div className='py-4 flex flex-col gap-8'>
        <AssetDetailsCard asset={asset} />
        <AssetTickets assetId={asset._id}/>
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
