const express = require("express");
const app = express();
const port = 4000;

app.get("/", (res, req) => {
  req.send("hello ");
  req.end("server is end");
});

app.listen(port, () => {
  console.log("server is running");
});
