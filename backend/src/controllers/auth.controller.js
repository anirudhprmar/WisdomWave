import bcrypt from "bcryptjs"
import { loginSchema,signupSchema } from "../schemas/auth.schema.js"
import User from "../models/user.model.js"
import { generateToken } from "../lib/utils.js"
import cloudinary from "../lib/cloudinary.js"


export const signup = async (req,res)=>{ 
    try {
      const validatedInput = await signupSchema.parseAsync(req.body);

      const existingUser = await User.findOne({ 
          $or: [
              { email: validatedInput.email },
              { username: validatedInput.username }
          ]
      });

      if (existingUser) {
          return res.status(400).json({
              status: 'fail',
              message: existingUser.email === validatedInput.email 
                  ? "Email already exists" 
                  : "Username already exists"
          });
      }

       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(validatedInput.password,salt)

       const newUser = await User.create({
       ...validatedInput,
        password:hashedPassword
       });

     
      const token = generateToken(newUser._id,res);
      
      return res.status(201).json({
        status: 'success',
        token,
        data: {
          user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilePic:newUser.profilePic
          }
        }
      })
       
    } catch (error) {
        console.log("Error in signup controller", error.message);

        // Handle Zod validation errors
        if (error.name === 'ZodError') {
          return res.status(400).json({
              status: 'fail',
              message: 'Validation failed',
              errors: error.errors.map(err => ({
                  field: err.path.join('.'),
                  message: err.message
              }))
          });
      }
        res.status(500).json({message:"Internal Server Error"})
        
    }
}

export const login = async (req,res) => {
    try {
      const { email, password } = await loginSchema.parseAsync(req.body);
      const user = await User.findOne({ email }) ;
      
      if (!user || !(await bcrypt.compare(password,user.password))) {
        return res.status(401).json({
          status: 'fail',
          message: 'Invalid credentials'
        });
      }
      
      const token = generateToken(user._id,res);
      
      res.status(200).json({
        status: 'success',
        token,
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profilePic:user.profilePic
          }
        }
      });
    } catch (error) {
      // Handle errors
      console.log("Error in login controller", error.message);

      if (error.name === 'ZodError') {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid credentials'
        });
    }

      res.status(500).json({message:"Internal Server Error"})
    }
  };

export const logout = (req,res)=>{
    try {
      res.clearCookie('jwt');

      return res.status(200).json({
        status: 'success',
        message: "Logged out successfully"
    });
    } catch (error) {
      console.log("Error in logout controller",error.message);
      res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateProfile = async (req,res)=>{
  try {
    const {profilePic} = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({message:"profile pic is required"})
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})

  res.status(200).json(updatedUser)

  } catch (error) {
    console.log("Error in update profile:",error.message);
    res.status(500).json({message:"Internal Server Error"})
  }
}

export const checkAuth = (req,res)=>{
  try {
    res.status(200).json(req.user)
  } catch (error) {
    console.log('Error in checkAuth controller:',error.message);
    res.status(500).json({message:"Internal server error"})
  }
}