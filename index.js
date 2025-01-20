const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    name: "Rohan",
    age: 20,
  });
});
app.listen(3009, (r) => {
    
  console.log("server is running on port 3009");
});
