import React, { useState } from "react";
import closeIcon from "./../../../src/assets/icons/close.svg";
import MyInput from "../shared/MyInput";
import MyTextArea from "../shared/MyTextArea";
import MySelectList from "../shared/MySelectList";
import MySelectOption from "../shared/MySelectOption";
import { assetCategories } from "@/assets/data/data";
import { assetTypes } from "@/assets/data/data";
import { Button } from "../ui/button";
import { addAsset } from "@/services/api";
import useAssets from "@/hooks/useAssets";
import useVendors from "@/hooks/useVendors";

const initialAssetValues = {
  assetName: "",
  assetCategory: "",
  assetType: "",
  assetSerial: "",
  description: "",
  assetVendor: {
    name: "",
    logoImage: "",
    email: "",
    contact_number: "",
  },
};

const AddAsset = ({ setShowAddAsset }) => {
  const {assets, categories,types} = useAssets()
  const {vendors} = useVendors()
  const [assetDetails, setAssetDetails] = useState(initialAssetValues);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setAssetDetails({ ...assetDetails, [e.target.name]: e.target.value });
  };

  const handleCancel = (e) => {
    setAssetDetails(initialAssetValues)
    setShowAddAsset(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(assetDetails);
    const isAdded = addAsset(assetDetails)
    if(isAdded){
        window.alert("Asset added successfully")
        setShowAddAsset(false)
    }
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-slate-800/40 flex justify-center items-center">
      <div className="bg-white w-[800px] p-4 flex-col rounded-lg shadow-lg">
        <div className="flex w-full justify-between">
          <h2 className="text-xl font-bold text-slate-600">Add Asset</h2>
          <button onClick={() => setShowAddAsset(false)}>
            <img src={closeIcon} className="w-8 h-8" />
          </button>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="mt-4 flex flex-col gap-y-4"
        >
          <div className="flex gap-4 items-center">
            <label className="text-lg">Category</label>
            <MySelectList
              name="assetCategory"
              value="DEFAULT"
              optionsList={categories}
              onValueChange={onValueChange}
            >
              <option name="DEFAULT">Select Categoey</option>
            </MySelectList>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-lg">Type</label>
            <MySelectList
              name="assetType"
              optionsList={types.filter(
                (item) => item.category == assetDetails.assetCategory
              )}
              onValueChange={onValueChange}
            >
              <option name="DEFAULT">Select Type</option>
            </MySelectList>
          </div>
          <div className="w-full">
            <MyInput
              placeholder="Asset name"
              name="assetName"
              onValueChange={onValueChange}
            />
          </div>
          <div className="w-full">
            <MyTextArea
              placeholder="Description"
              name="description"
              onValueChange={onValueChange}
            />
          </div>
          <div>
            <MyInput
              name="assetSerial"
              placeholder="Serial Number"
              onValueChange={onValueChange}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-lg">Vendor</label>
            <MySelectList
              name="assetVendor"
              optionsList={vendors}
              onValueChange={onValueChange}
            >
              <option name="DEFAULT">Select Vendor</option>
            </MySelectList>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handleCancel}>Cancel</Button>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
