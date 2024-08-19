import mongoose from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    assetType : {
        type: String,
        required: true
    },
    assetSerial: {
        type: String
    },
    description : {
        type: String,
        required: true
    },
    assetVendor: vendorSchema
})

const Asset = mongoose.Model("Asset",assetSchema)

export default Asset;