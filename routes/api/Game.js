const express = require("express");
const router = express.Router();

// POST 
router.get("/", (req, res) => {
  try {
    res.send("Route connected");
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
