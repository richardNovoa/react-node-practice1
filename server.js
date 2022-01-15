const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/game", require("./routes/api/Game"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
