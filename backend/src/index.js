import express from "express"
import authRoutes from "./routes/auth.route.js"
import quoteRoutes from "./routes/quote.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"
import cors from "cors"

import path from 'path'

dotenv.config()


const __dirname = path.resolve()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authRoutes)

app.use("/api/quotes",quoteRoutes)

if (process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

const PORT = process.env.PORT


app.listen(PORT, async () => {
    console.log(`Server is running on port: ${PORT}`)
    try {
        await connectDB()
        console.log('Successfully connected to MongoDB')
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message)
        process.exit(1)
    }
})