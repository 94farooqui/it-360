import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db_url = process.env.DB_URL

//console.log(process.env.DB_URL)

export const connect_DB = async () => {
    try{
        await mongoose.connect(db_url)
        console.log("Successfully connected to DB")
    }
    catch(error){
        console.log("Error in connecting DB",error)
    }
}