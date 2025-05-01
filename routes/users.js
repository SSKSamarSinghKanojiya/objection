const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getCurrentUser,
  deleteCurrentUser,
} = require("../controllers/users");
const { authorize, auth } = require("../middlewares/authMiddleware");

// Admin-only: Get all users
// router.get("/", auth, authorize("admin","user"), getAllUsers);
// router.get("/", auth, authorize("admin","user"), getAllUsers);
router.get("/", auth, authorize("admin"), getAllUsers);


// Authenticated routes
router.get("/me", auth, getCurrentUser);
router.delete("/me", auth, deleteCurrentUser);

module.exports = router;
