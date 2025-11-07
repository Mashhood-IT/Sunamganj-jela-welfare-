const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./db/db");
const memberShipRoutes = require("./routes/memberShipRoutes");
const stripeRoutes = require("./routes/stripe");
const contactRoutes = require("./routes/contactMessageRoutes");

const PORT = process.env.PORT;
const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://sunamganj-jela-welfare.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://sunamganj-jela-welfare.netlify.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
connectDB;
app.use("/api", memberShipRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/contact", contactRoutes);
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
