const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");

const PORT = process.env.PORT || 5000; // Default to 3000 if PORT is not set

// Connect to the database
connectDb();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public")); // Serve static files from the "public" folder

// Routes
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err); // Log the error if the server fails to start
  } else {
    console.log(`App is listening on port ${PORT}`);
  }
});
