import express from "express"
import {removeSavedQuote,deleteQuote, getUserCreatedQuotes, createQuote ,exploreOtherUsersQuotes, saveQuote, getUserSavedQuotes, getUserQuotes } from "../controllers/quote.controller.js"
import protectRoute from "../middlewares/auth.middleware.js"

const router = express.Router()

router.use(protectRoute)

router.get('/my-quotes', getUserCreatedQuotes)
router.get('/my-saved',getUserSavedQuotes)
router.get('/allQuotes',getUserQuotes)
router.get('/explore', exploreOtherUsersQuotes)

router.post('/create', createQuote)

router.put('/:quoteId/save',saveQuote)

router.delete('/:quoteId/delete',deleteQuote)
router.delete('/:quoteId/removeSaved',removeSavedQuote)



export default router;