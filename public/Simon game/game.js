var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//starting the game
var started = false;
var level = 0;

$(document).on("keypress", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//user attempts and animation

$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animate(userChosenColour);

    checkAnswer(userClickedPattern.length-1);    
})

function checkAnswer(currentLevel){
    console.log("you clicked "+userClickedPattern[currentLevel]);
    console.log("game picked "+gamePattern[currentLevel]);
    
    
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
//call nextsequence after 1sec 

            console.log("success");
            if(userClickedPattern.length==gamePattern.length){
                setTimeout(nextSequence(),1000);
        }
    }
        else{
            playSound("wrong");
            $('body').addClass("game-over");
           setTimeout(function(){
            $('body').removeClass("game-over"); 
           },200)
           startover();
        }

    }

//random button and animation given to user for increasing level of game
function nextSequence() {
    
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
}

//restart game
function startover(){
    $("#level-title").text("Enter any key to restart the game");
    level = 0;
    started = false;
    gamePattern = [];
}

//sound effect for each botton 
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//animation for bottons
function animate(currentColour) {
    $("." + currentColour).addClass("pressed");

    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

 