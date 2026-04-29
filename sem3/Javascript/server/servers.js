
const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
  res.write("hello");
  res.end("end");
});

server.listen(port, () => {
  console.log("server is runnins");
});
