const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const connectDB = require('./db/db')
const memberShipRoutes = require("./routes/memberShipRoutes")

const PORT = process.env.PORT
const app = express()
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json())
app.use(cors())
connectDB;
app.use("/api",memberShipRoutes)
app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})