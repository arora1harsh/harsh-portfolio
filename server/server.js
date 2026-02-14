const projectRoutes = require("./routes/projectRoutes");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
