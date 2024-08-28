import AddCategory from '@/components/assets/AddCategory'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import useAssets from '@/hooks/useAssets'
import { getAllAssetCategories } from '@/services/api'
import React, { useEffect, useState } from 'react'

const AssetCategoreis = () => {
  const [showNewCategory,setShowNewCategory] = useState(false)
  const {categories,setCategories} = useAssets()



  // useEffect(()=>{
  //   const fetchCategories = async  ()=>{
  //     const data = await getAllAssetCategories()
  //     if(data){
  //       setCategories(data)
  //     }
  //   }
  //   fetchCategories()
  // },[])
  return (
    <div className="py-4 pr-4">
      <PageHeader>
      <h2 className='text-2xl font-semibold text-slate-600'>Asset Categories</h2>
        <Button variant="outline" onClick={()=>setShowNewCategory(true)}>Add New</Button>
      </PageHeader>
      {showNewCategory && <AddAssetType setShowNewCategory={setShowNewCategory}/>}
      <div className='w-full h-full grid grid-cols-3 gap-4 py-4'>
        {categories && categories.map(category => <div className='bg-white p-4 rounded-lg'>{category.name}</div>)}
      </div>
    </div>
  )
}

export default AssetCategoreis