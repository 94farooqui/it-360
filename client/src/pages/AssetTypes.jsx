import AddAssetType from '@/components/assets/AddAssetType'
import AddCategory from '@/components/assets/AddCategory'
import PageHeader from '@/components/PageHeader'
import ErrorPage from '@/components/shared/ErrorPage'
import { Button } from '@/components/ui/button'
import useAssets from '@/hooks/useAssets'
import { getAllAssetCategories, getAllAssetTypes } from '@/services/api'
import React, { useEffect, useState } from 'react'

const AssetTypes = () => {
  const [showNewType,setShowNewType] = useState(false)
  const {types,setTypes,error} = useAssets()



  // useEffect(()=>{
  //   const fetchTypes = async  ()=>{
  //     const data = await getAllAssetTypes()
  //     if(data){
  //      setTypes(data)
  //     }
  //   }
  //   fetchTypes()
  // },[])
  if(!types){
    return <h2>Loading...</h2>
  }

  if(error){
    return <ErrorPage/>
  }
  return (
    <div className="py-4 pr-4">
      <PageHeader>
      <h2 className='text-2xl font-semibold text-slate-600'>Asset Types</h2>
        <Button variant="outline" onClick={()=>setShowNewType(true)}>Add New</Button>
      </PageHeader>
      {showNewType && <AddAssetType setShowNewType={setShowNewType}/>}
      <div className='w-full h-full grid grid-cols-3 gap-4 py-4'>
        {types && types.map(type => <div className='bg-white p-4 rounded-lg'>{type.name}</div>)}
      </div>
    </div>
  )
}

export default AssetTypes