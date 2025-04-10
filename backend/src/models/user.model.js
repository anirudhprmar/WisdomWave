import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    }, // Unique
    email: {
        type:String,
        required:true,
        unique:true
    }, // Unique
    password: {
        type:String,
        required:true,
        minLength:6,
    }, // to be Hashed
    profilePic: {
        type:String,
        default:""
    }, // URL to image
    // bio: String,
    // followers: [ObjectId],  // Array of user IDs
    // following: [ObjectId],  // Array of user IDs
},{timestamps:true}
)

const User = mongoose.model("User",userSchema);

export default User;