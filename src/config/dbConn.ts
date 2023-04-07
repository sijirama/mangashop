import  Mongoose  from "mongoose";

const connectDB = async () => {
    try {
       await Mongoose.connect(process.env.DATABASE_URI as string , {
       }) 
    } catch (error) {
        
    }
}

export default connectDB