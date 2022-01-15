const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Game = require("../../models/Game");

// POST
router.get("/", (req, res) => {
  try {
    res.send("Route connected");
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    //deconstruct the JSON body
    const { moves, winner } = req.body;
    //construct Game model
    const newGame = new Game({ moves, winner });
    //save to db
    await newGame.save();
    //feedback of entry
    res.json(newGame);
  } catch (err) {
    console.error(err.message);
    res.json(err.message);
  }
});

module.exports = router;
