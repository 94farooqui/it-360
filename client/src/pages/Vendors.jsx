import AddAssetType from '@/components/assets/AddAssetType'
import AddCategory from '@/components/assets/AddCategory'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import AddVendor from '@/components/vendor/AddVendor'
import useAssets from '@/hooks/useAssets'
import useVendors from '@/hooks/useVendors'
import { getAllAssetCategories, getAllAssetTypes } from '@/services/api'
import React, { useEffect, useState } from 'react'

const Vendors = () => {
  const [showNewVendor,setShowNewVendor] = useState(false)
  const {vendors,setVendors} = useVendors()

  return (
    <div className="py-4 pr-4">
      <PageHeader>
        <h2>Vendors</h2>
        <Button variant="outline" onClick={()=>setShowNewVendor(true)}>Add New</Button>
      </PageHeader>
      {showNewVendor && <AddVendor setShowNewVendor={setShowNewVendor}/>}
      <div className='w-full h-full grid grid-cols-3 gap-4 py-4'>
        {vendors && vendors.map(vendor => <div className='bg-white p-4 rounded-lg'>{vendor.name}</div>)}
      </div>
    </div>
  )
}

export default Vendors