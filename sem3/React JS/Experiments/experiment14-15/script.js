const express = require("express");
const cache = require("memory-cache");
const app = express();

const cacheDuration = 60 * 10; // 10 minutes

app.get("/api/data", (req, res) => {
  const cachedData = cache.get("apiData");

  if (cachedData) {
    console.log("✅ Data from cache");
    return res.json(cachedData);
  }

  const data = fetchDataFromDatabase();
  cache.put("apiData", data, cacheDuration);
  console.log("✅ Data from database");
  res.json(data);
});

function fetchDataFromDatabase() {
  return {
    name: "Chetan",
    course: "Full Stack Development",
    status: "Active",
  };
}

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
