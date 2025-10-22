// server.js
const express = require("express");
const app = express();
const PORT = 4500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express running on port 4500");
});

app.listen(PORT, () => {
  console.log(`✅ Server is live at http://localhost:${PORT}`);
});
