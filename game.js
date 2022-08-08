var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequense() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
    audio.play();
}
$("button").click(function (e) { 
    e.preventDefault();
    
});