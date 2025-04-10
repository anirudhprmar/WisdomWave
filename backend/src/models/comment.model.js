import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    _id: ObjectId,
    user: ObjectId,
    quote: ObjectId,
    text: String,
    likes: [ObjectId],
    likeCount: Number,
    replies: [ObjectId],    // For nested comments
    createdAt: Date,
    updatedAt: Date
  })

const Comment = mongoose.model("Comment",commentSchema)
export default Comment;