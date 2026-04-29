const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Node.js Server is running successfully!");
});

app.get("/test", (req, res) => {
  res.json({ message: "✅ This is a test route working fine!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
