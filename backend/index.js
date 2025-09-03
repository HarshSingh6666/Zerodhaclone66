require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Models
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel"); // make sure this exists

// Routes
const authRoute = require("./Routes/AuthRoute");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5000"],  // दोनों allow
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json()); // replaces body-parser

// MongoDB connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/", authRoute);

// API endpoints
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
