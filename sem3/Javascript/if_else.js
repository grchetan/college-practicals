const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error aaya");
  } else {
    console.log(data);
  }
});
