require("dotenv").config();
const express = require("express");
require("./db/knex"); // initialize Objection with knex
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");

const app = express();
app.use(express.json());

// 👋 Hello API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Auth and user routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
