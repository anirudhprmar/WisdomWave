import Quote from '../models/quote.model.js';
import { quoteSchema } from '../schemas/quote.schema.js';


export const createQuote = async (req,res) => {

  try {
    
   const validatedData = await quoteSchema.parseAsync({
    ...req.body,
    userId: req.user._id.toString()
  });
  
  // Create quote with original ObjectId
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
    const quotes = await Quote.find({
      $or: [
        { userId: req.user._id },
        { savedBy: req.user._id }
      ]
    });

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

export const getUserSavedQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ savedBy: req.user._id });

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


export const getUserCreatedQuotes = async (req, res) => {
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

export const saveQuote = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const { quoteId } = req.params;

    // Verify quote exists and check if already saved in one query
    const selectedQuote = await Quote.findById(quoteId);
    
    if (!selectedQuote) {
      return res.status(404).json({
        status: 'fail',
        message: 'Quote not found'
      });
    }

    // Check if user has already saved this quote
    const alreadySaved = selectedQuote.savedBy.some(id => id.toString() === loggedInUserId.toString());
    
    if (alreadySaved) {
      return res.status(400).json({
        status: 'fail',
        message: 'Quote already saved by user'
      });
    }

    // Add user to savedBy array
    selectedQuote.savedBy.push(loggedInUserId);
    await selectedQuote.save();

    res.status(200).json({
      status: 'success',
      message: 'Quote saved successfully',
      data: { quote: selectedQuote }
    });

  } catch (error) {
    console.error("Error in save quote:", error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};


export const deleteQuote = async (req,res)=>{
  try {
    const loggedInUserId = req.user._id;
    const { quoteId } = req.params;

    //delete the quotes which are only created by the user

    
    const selectedQuote = await Quote.findById(quoteId)

    if (!selectedQuote) {
      return res.status(404).json({
        status: 'fail',
        message: 'Quote not found'
      });
    }

    const isCreatedByUser = selectedQuote.userId.toString() === loggedInUserId.toString();

    if (!isCreatedByUser) {
      return res.status(403).json({
        status:"fail",
        message:"You can only delete your own quotes"
      })
    }

    await Quote.findByIdAndDelete(quoteId)
    

    res.status(200).json({
      status:"Quote deleted"
    })

  } catch (error) {
    console.log("Error in explore others users quotes:",err.message);
    res.status(500).json({message:"Internal Server Error"})
  }
}

