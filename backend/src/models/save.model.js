import mongoose from "mongoose";

const saveSchema = mongoose.Schema({
    _id: ObjectId,
    user: ObjectId,
    quote: ObjectId,
    createdAt: Date,
    // collection: String   // Optional: if you allow multiple save collections
  })

const Save = mongoose.model("Save",saveSchema)
export default Save;