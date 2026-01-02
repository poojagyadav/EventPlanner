const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET PROFILE
router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
