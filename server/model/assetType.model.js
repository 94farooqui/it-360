import mongoose, { Schema } from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetTypeSchema = new mongoose.Schema({
    category : {
       type: Schema.Types.ObjectId,
       ref: "Asset_Category"
    },
    name : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
        type: String,
    }
})

const Asset_Type = mongoose.model("Asset_Type",assetTypeSchema)

export default Asset_Type;