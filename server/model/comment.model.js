import mongoose from "mongoose";
import { userSchema } from "./user.model.js";

export const commentSchema = new mongoose.Schema({
    author: userSchema,
    content: {
        type: String,
        required: true
    },
    
},{timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment