import mongoose from "mongoose";
import { environmentVariables } from "./EnvironmentVariables";

const DB_URL = environmentVariables.DB_STRING

export const DBconnect = async() =>{
    try {
        const DB = await mongoose.connect(DB_URL)
        console.log(`Database is connected to ${DB.connection.host}`)
    } catch (error) {
        console.log("Couldn't connect Database")
    }
}