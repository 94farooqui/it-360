import mongoose, { Schema } from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetSchema = new mongoose.Schema({
    category : {
       type: Schema.Types.ObjectId,
       ref: "assetCategory"
    },
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