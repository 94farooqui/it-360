import mongoose from "mongoose";
import { assetSchema } from "./asset.model";
import { userSchema } from "./user.model";
import { commentSchema } from "./comment.model";

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
    },
    asset : {
        type: Schema.Types.ObjectId,
        ref: "asset"
     },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: "user"
     },
    comments: [commentSchema]
},{timestamps: true})
