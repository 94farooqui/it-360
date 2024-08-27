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
    },
    portal : {
        type: String,
        required: true
    }
})

const Vendor = mongoose.model("Vendor",vendorSchema)

export default Vendor;