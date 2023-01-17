const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/result", function (req, res) {
  var w1 = Number(req.body.weight);
  var h1 = Number(req.body.height) / 100;

  var bmi = w1 / (h1 * h1);
  var bmiRound = Math.round((bmi + Number.EPSILON) * 100) / 100;

  res.send("<h1>BMI Calculator</h1><br/>Your BMI is " + bmiRound);
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});
