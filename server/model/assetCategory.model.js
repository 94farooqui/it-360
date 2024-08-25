import mongoose from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetSchema = new mongoose.Schema({
 
    name : {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    }
})

const Asset = mongoose.Model("Asset",assetSchema)

export default Asset;