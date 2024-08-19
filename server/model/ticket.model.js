import mongoose from "mongoose";
import { assetSchema } from "./asset.model";
import { userSchema } from "./user.model";
import { commentSchema } from "./comment.model";

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    asset : assetSchema,
    assignee: userSchema,
    comments: [commentSchema]
},{timestamps: true})
