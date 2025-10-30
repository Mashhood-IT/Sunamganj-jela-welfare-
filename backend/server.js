const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const connectDB = require('./db/db')
const memberShipRoutes = require("./routes/memberShipRoutes")
const stripeRoutes = require("./routes/stripe")
const contactRoutes = require("./routes/contactMessageRoutes")

const PORT = process.env.PORT
const app = express()
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json())
app.use(cors())
connectDB;
app.use("/api",memberShipRoutes)
app.use("/api/stripe", stripeRoutes)
app.use("/api/contact", contactRoutes)
app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})