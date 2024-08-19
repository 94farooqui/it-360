import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

const User = mongoose.Model("User",userSchema)

export default User;