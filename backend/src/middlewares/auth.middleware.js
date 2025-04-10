import User from "../models/user.model.js";
import { verifyToken } from '../lib/utils.js';

async function protectRoute(req, res, next) {
    try {
        // Check for token in cookies or Authorization header
        let token = req.cookies.jwt;

        // If no cookie, check Authorization header
        const authHeader = req.headers.authorization;
        
        if (!token && authHeader?.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                status: 'fail',
                message: "Unauthorized - No Token Provided"
            });
        }

        const decoded = await verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                status: 'fail',
                message: "Unauthorized - Invalid Token"
            });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: "User not found"
            });
        }

        req.user = user;
        next();
   } catch (error) {
    console.log("Error in errorRoute middleware:",error.message);
    
   }
}

export default protectRoute;