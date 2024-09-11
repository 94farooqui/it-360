import mongoose, { Schema } from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetSchema = new mongoose.Schema({
    assetName : {
        type: String,
        required: true
    },
    assetCategory : {
        type: Schema.Types.ObjectId,
        ref: "Asset_Category"
    },
    assetType : {
        type: Schema.Types.ObjectId,
        ref: "Asset_Type"
    },
    assetSerial: {
        type: String
    },
    description : {
        type: String,
        required: true
    },
    assetVendor: {
        type: Schema.Types.ObjectId,
        ref: "Vendor"
    },
    tickets: [{type: Schema.Types.ObjectId, ref: "Ticket"}]
})

const Asset = mongoose.model("Asset",assetSchema)

export default Asset;