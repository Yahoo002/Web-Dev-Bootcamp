const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>About</h1><br>Hello! I am Yahya");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact</h1><br> Contact me at yahya.a002@outlook.com");
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
