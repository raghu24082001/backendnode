import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectDB from "./config/db.js"
import directroute from "./router/authRoute.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

app.use("/api/user",directroute)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user