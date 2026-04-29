const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "mySecretKey123";

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "user" && password === "password") {
    const payload = { username: username };
    const token = jwt.sign(payload, secretKey);
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
