const HTTP = require("http");
const PORT = 4000;

const Server = HTTP.createServer((req, res) => {
  res.write("<p>Heloo</p>");

  res.end(`
    <h1>Chetan Prajapat</h1>
    <h1>Age 20  </h1>
    <h1>Subject BCA </h1>
    
    `);
});

Server.listen(PORT, () => {
  console.log("Hey! Broooo Server is Running");
});

// template litrals padha ke aana hai
