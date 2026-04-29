const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res) => {

  if (req.url === "/About") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Chetan Prajapat</h1>
      <h2>Age: 22</h2>
      <h3>Subject: BCA</h3>
    `);
  }

  if (req.url === "/Setting") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is setting page");
  }

 
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
