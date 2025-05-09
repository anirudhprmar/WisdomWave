import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
    {
    // _id: mongoose.Schema.Types.ObjectId, automatically mongoose will add id
    content: String,        // The actual quote text
    author: String,         // Original author of the quote
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },         // Who posted it in your app
    // likes: [mongoose.Schema.Types.ObjectId],      // Array of user IDs who liked
    // likeCount: Number,      // Denormalized count for performance
    isPublic: {
        type:Boolean,
        default:true
    },     // public/private/followers-only
    // tags: [String],         // For categorization
    savedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    // saveCount: Number,      // Denormalized count
    // shares: Number,         // Share count
    // comments: [ObjectId],   // Array of comment IDs (if using ref)
},
    {timestamps:true}
)

const Quote = mongoose.model("Quote",quoteSchema);

export default Quote;