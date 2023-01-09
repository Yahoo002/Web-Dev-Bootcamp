var colors = ["red", "green", "blue", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColorChooser = colors[randomNumber];
  gamePattern.push(randomColorChooser);

  $("#" + randomColorChooser)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds" + randomColorChooser + ".mp3");
  audio.play();
}
