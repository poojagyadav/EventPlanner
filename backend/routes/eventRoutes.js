const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE EVENT
router.post("/", auth, async (req, res) => {
  const { title, description, date, time } = req.body;

  if (!title || !date || !time) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const event = await Event.create({
    title,
    description,
    date,
    time,
    user: req.user.id,
  });

  res.status(201).json(event);
});

// GET MY EVENTS
router.get("/", auth, async (req, res) => {
  const events = await Event.find({ user: req.user.id });
  res.json(events);
});

// UPDATE EVENT
router.put("/:id", auth, async (req, res) => {
  const event = await Event.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json(event);
});

// DELETE EVENT
router.delete("/:id", auth, async (req, res) => {
  const event = await Event.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json({ message: "Event deleted" });
});

module.exports = router;
