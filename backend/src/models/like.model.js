import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    _id: ObjectId,
    user: ObjectId,
    quote: ObjectId,
    createdAt: Date
})

const Like = mongoose.model("Like",likeSchema)
export default Like;