const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Calculator</h1>");
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
