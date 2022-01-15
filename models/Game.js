const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  moves: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  winner: {
    type: String,
    required: true,
  },
});

module.exports = Game = mongoose.model("game", GameSchema);
