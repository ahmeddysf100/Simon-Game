var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var baka = 1;

function nextSequense() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
};
$(".btn").click(handler);

function handler() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
};

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
};
function playSound(name2) {
    var audio2 = new Audio("sounds/" + name2 + ".ogg")
    audio.play();
};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(remove, 150);

    function remove() {
        $("#" + currentColor).removeClass("pressed");
    };
};

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("level " + level);
        nextSequense();
        started = true;

    }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequense();
            }, 1000);
        }

    } else {
        if (baka === 1) {
            var audio2 = new Audio("sounds/1.ogg");
            audio2.play();
            baka++;
        } else if (baka === 2) {
            var audio2 = new Audio("sounds/audio_169@26-04-2022_18-42-15.ogg");
            audio2.play();
            baka++;
        } else if (baka === 3) {
            var audio2 = new Audio("sounds/audio_201@27-05-2022_01-38-17.ogg");
            audio2.play();
            baka = 1;
        }
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
       $("#level-title").text("Game Over, Press Any Key to Restart");
    }

}