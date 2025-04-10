import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

// Connect to MongoDB
export const connectDB = async()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGODB_URI)
       
       console.log(`MongoDB connected: ${conn.connection.host}`);
       
    } catch (error) {
        console.log(`MongoDb connection error;${error}`);
    }
}


// Define schemas

