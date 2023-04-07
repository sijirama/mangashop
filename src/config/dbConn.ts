import dotenv from "dotenv";
dotenv.config()
import  Mongoose  from "mongoose";
const uri = process.env.DATABASE_URI

const connectDB = () => {
    try {
        console.log("Connecting to Mongo...");
        Mongoose.connect(uri as string)
        console.log("Still connecting to Mongo...")
    } catch (error) {
        console.log(error)   
    }
}

export default connectDB