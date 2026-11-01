const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MADFAN TICKETS SELLERS backend is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is working" });
});

app.post("/api/bookings", (req, res) => {
  const { name, phone, category, quantity } = req.body;

  if (!name || !phone || !category || !quantity) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, phone, category, and quantity."
    });
  }

  res.status(201).json({
    success: true,
    message: "Booking details received. Payment has not been made.",
    booking: { name, phone, category, quantity }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
