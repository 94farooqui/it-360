import AddAsset from "@/components/assets/AddAsset";
import AssetHeader from "@/components/assets/AssetHeader";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { getAllAssets } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Assets = () => {
  const [showAddAsset, setShowAddAsset] = useState(false);

  useEffect(() => {
    getAllAssets();
  });
  return (
    <div className="py-4">
      {showAddAsset && <AddAsset setShowAddAsset={setShowAddAsset} />}
      <AssetHeader />
    </div>
  );
};

export default Assets;
