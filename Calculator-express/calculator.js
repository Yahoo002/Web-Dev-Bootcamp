const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;

  res.send("The result is " + result);
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
