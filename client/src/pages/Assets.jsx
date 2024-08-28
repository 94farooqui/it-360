import AddAsset from "@/components/assets/AddAsset";
import AssetHeader from "@/components/assets/AssetHeader";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import useAssets from "@/hooks/useAssets";
import { getAllAssets } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Assets = () => {
  const [showAddAsset, setShowAddAsset] = useState(false);
  const {assets} = useAssets()

  useEffect(() => {
    getAllAssets();
  });
  return (
    <div className="py-4">
      {showAddAsset && <AddAsset setShowAddAsset={setShowAddAsset} />}
      <PageHeader>
        <h2>Assets</h2>
        <Button variant="outline" onClick={()=>setShowAddAsset(true)}>Add New</Button>
      </PageHeader>
      <div className='w-full h-full grid grid-cols-3 gap-4 py-4'>
        {assets && assets.map(asset => <div className='bg-white p-4 rounded-lg'>{asset.name}</div>)}
      </div>
    </div>
  );
};

export default Assets;
