import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AssetCard = ({ asset }) => {
    const navigate = useNavigate()
  const {
    _id,
    assetName,
    description,
    assetCategory,
    assetType,
    assetSerial,
    assetVendor,
  } = asset;

  const handleClick = () => {
    navigate(`${_id}`, {state: {asset}})
  }
  return (
   
      <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col justify-between gap-8 cursor-pointer" onClick={handleClick}>
        <div>
          <h2 className="text-slate-700 font-semibold">{assetName}</h2>
          <p className="mt-1 text-xs text-slate-500 truncate">{description}</p>
          {assetSerial && (
            <p className="mt-2 text-xs text-slate-500 truncate">
              {" "}
              <span className="font-semibold">Serial Number</span>:{" "}
              {assetSerial}
            </p>
          )}
        </div>

        <div className="text-[11px] flex gap-2 flex-wrap">
          {assetCategory && (
            <p className=" rounded-full bg-slate-200 border py-[2px] px-2">
              {assetCategory.name}
            </p>
          )}
          {assetType && (
            <p className=" rounded-full bg-slate-200 border py-[2px] px-2">
              {assetType.name}
            </p>
          )}

          {assetVendor && (
            <p className=" rounded-full bg-slate-200 border py-[2px] px-2">
              {assetVendor.name}
            </p>
          )}
        </div>
      </div>
  );
};

export default AssetCard;

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
