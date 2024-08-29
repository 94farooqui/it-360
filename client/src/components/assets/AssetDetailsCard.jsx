import React from "react";

const AssetDetailsCard = ({ asset }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="px-8 pt-8 pb-4">
        <h2 className="text-2xl font-semibold text-slate-600">{asset.assetName}</h2>
        <p className="text-sm text-slate-500 mt-2">{asset.description}</p>
      </div>
      <hr/>
      <div className="grid grid-cols-3 text-sm text-slate-500 px-8 py-4">
        <p><span className="font-semibold">Category:</span> {asset.assetCategory.name}</p>
        <p><span className="font-semibold">Type:</span> {asset.assetType.name}</p>
        <p><span className="font-semibold">Serial Number :</span> {asset.assetSerial}</p>
        </div>
        <div className="col-span-3 border-t px-8 text-sm text-slate-500 py-4">
          <p className="font-semibold">Vendor</p>
          <div className=" mt-2 grid grid-cols-2">
            <p><span className="font-semibold">Name: </span> {asset.assetVendor.name}</p>
            <p><span className="font-semibold">Email: </span> {asset.assetVendor.email}</p>
            <p><span className="font-semibold">Phone: </span> {asset.assetVendor.contact_number}</p>
            <p><span className="font-semibold">Website: </span> {asset.assetVendor.portal}</p>
          </div>
        </div>
      
    </div>
  );
};

export default AssetDetailsCard;
