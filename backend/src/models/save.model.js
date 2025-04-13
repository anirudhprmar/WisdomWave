import mongoose from "mongoose";

const saveSchema = mongoose.Schema({
    quote: ObjectId,
    userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
    },
    savedBy:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      default:[]
    }]
  },{timestamps:true})

const Save = mongoose.model("Save",saveSchema)
export default Save;