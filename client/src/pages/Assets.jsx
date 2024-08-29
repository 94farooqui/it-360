import AddAsset from "@/components/assets/AddAsset";
import AssetCard from "@/components/assets/AssetCard";
import AssetHeader from "@/components/assets/AssetHeader";
import PageHeader from "@/components/PageHeader";
import Searchbar from "@/components/shared/Searchbar";
import { Button } from "@/components/ui/button";
import useAssets from "@/hooks/useAssets";
import { getAllAssets } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Assets = () => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const {assets} = useAssets()

  useEffect(() => {
   
  });

  if(!assets){
    return <h2>Loading..</h2>
  }
  return (
    <div className="py-4">
      {showAddAsset && <AddAsset setShowAddAsset={setShowAddAsset} />}
      <PageHeader>
      <h2 className='text-2xl font-semibold text-slate-600'>Assets</h2>
        <Button variant="outline" onClick={()=>setShowAddAsset(true)}>Add New</Button>
      </PageHeader>
      <Searchbar/>
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-4'>
        {assets && assets.map(asset => <AssetCard asset={asset}/>)}
      </div>
    </div>
  );
};

export default Assets;
