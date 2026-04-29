const http = require("http");
const port = 3000;

const Server = http.createServer((req, res) => {
  
  res.write("<h1>hello My name is chetan </h1>");
  res.end();
});

Server.listen(port, () => {
  console.log("server is runing");
});

// be used callback for handling the a sychronous task
// 


// tino cheze par ke aana hai server express  node modules , package.json , package-lock.json