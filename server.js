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




/*

File	Purpose
knexfile.js	Knex configuration using env variables
knex.js	Initializes Knex and binds it to Objection
migrations/*.js	Creates database tables
models/User.js	Defines a model to interact with users table
*/