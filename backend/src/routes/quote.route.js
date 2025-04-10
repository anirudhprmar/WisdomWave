import express from "express"
import {getUserQuotes, createQuote ,exploreOtherUsersQuotes } from "../controllers/quote.controller.js"
import protectRoute from "../middlewares/auth.middleware.js"

const router = express.Router()

router.use(protectRoute)

router.post('/create', createQuote)
router.get('/my-quotes', getUserQuotes)
router.get('/explore', exploreOtherUsersQuotes)



export default router;