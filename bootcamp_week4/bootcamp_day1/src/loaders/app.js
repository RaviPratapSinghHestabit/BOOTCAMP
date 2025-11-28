// src/loaders/app.js
const express = require("express");
const app = express();
const productRoutes = require("../routes/product.routes");

app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Optional: catch-all 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
