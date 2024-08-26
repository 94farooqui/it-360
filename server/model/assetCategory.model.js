import mongoose from "mongoose";
import { vendorSchema } from "./vendor.model.js";

export const assetCategorySchema = new mongoose.Schema({
 
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

const Asset_Category = mongoose.model("Asset_Category",assetCategorySchema)

export default Asset_Category;