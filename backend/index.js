const express = require("express");
const connection = require("./Db_Connection/Connection");
const reviewRoutes = require("./Routes/review");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connection();

// API routes
app.use("/api/reviews", reviewRoutes);

// Export the app for Vercel
module.exports = app;
