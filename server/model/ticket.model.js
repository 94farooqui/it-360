import mongoose, { Schema } from "mongoose";
import { assetSchema } from "./asset.model.js";
import { userSchema } from "./user.model.js";
import { commentSchema } from "./comment.model.js";

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
    },
    severity:{
        type: String,
    },
    asset : {
        type: Schema.Types.ObjectId,
        ref: "Asset"
     },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: "user"
     },
    comments: [commentSchema]
},{timestamps: true})

const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket