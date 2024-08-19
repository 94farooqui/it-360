import mongoose from "mongoose";

export const vendorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    logoImage: {
        type: String
    },
    email : {
        type: String,
        required: true
    },
    contact_number : {
        type: String,
        required: true
    }
})

const vendor = mongoose.Model("vendor",vendorSchema)

export default vendor;