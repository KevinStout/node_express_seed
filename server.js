// This is going to be a simple seed
const express = require("express");
const app = express();
const port = 8000;

// GET endpoint
app.get("/api/data", (req, res) => {
  // Handle GET request here
  res.send("This is the GET endpoint");
});

// POST endpoint
app.post("/api/data", (req, res) => {
  // Handle POST request here
  res.send("This is the POST endpoint");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
