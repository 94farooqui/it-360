import AddAsset from '@/components/assets/AddAsset'
import AssetHeader from '@/components/assets/AssetHeader'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Assets = () => {
  const [showAddAsset,setShowAddAsset] = useState(false)
  return (
    <div className='py-4'>
      {showAddAsset && <AddAsset setShowAddAsset={setShowAddAsset}/>}
      <PageHeader>
        <h2 className="text-2xl font-semibold text-slate-600">Assets</h2>
        <Link><button className="font-semibold text-lg w-32 flex justify-between" onClick={()=>setShowAddAsset(true)} >Add New</button></Link>

      </PageHeader>
    </div>
  )
}

export default Assets