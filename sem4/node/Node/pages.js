const HTTP = require("http");
const PORT = 4000;

const Server = HTTP.createServer((req, res) => {
  if (req.url == "/About") {
    const obj = {
      person: "chetan ",
      age: 22,
      
    };
    res.end(JSON.stringify(obj));
    
    
  }

  if (req.url == "/Setting ") {
    res.end("This is setting page");
  }
    res.end(`
    <h1>Chetan Prajapat</h1>
    <h1>Age 20  </h1>
    <h1>Subject BCA </h1>
    
    `);
});

Server.listen(PORT, () => {
  console.log("Server is running");
});

// template litrals padha ke aana hai
