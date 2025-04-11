import Quote from '../models/quote.model.js';
import { quoteSchema } from '../schemas/quote.schema.js';


export const createQuote = async (req,res) => {

  try {
    const validatedData = await quoteSchema.parseAsync({
      ...req.body,
      user: req.user._id
    });

    const quote = await Quote.create(validatedData);
    
    res.status(201).json({
      status: 'success',
      data: { quote }
    });
  } catch (err) {
    // Handle errors
    console.log("Error in create quote:",err.message);
    // Handle Zod validation errors
    if (err.name === 'ZodError') {
        return res.status(400).json({
            status: 'fail',
            message: 'Wrong Inputs',
            errors: err.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message
            }))
        });
    }
    res.status(500).json({message:"Internal Server Error"})
  }
};

export const getUserQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ userId: req.user._id });
    res.json({
      status: 'success',
      results: quotes.length,
      data: { quotes }
    });
  } catch (err) {
    // Handle errors
    console.log("Error in user quote:",err.message);
    res.status(500).json({message:"Internal Server Error"})
  }
};

export const exploreOtherUsersQuotes = async (req,res)=>{
  try {
    const loggedInUserId = req.user._id;
    const quotes = await Quote.find({_id: {$ne:loggedInUserId},isPublic:true}).select("-password")

    res.status(200).json({
      status:"success",
      data:{quotes}
    })

    // todo: realtime functionality => socket.io
    
  } catch (error) {
    console.log("Error in explore others users quotes:",err.message);
    res.status(500).json({message:"Internal Server Error"})
  }
}


