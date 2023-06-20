for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });
}



document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "K":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "U":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "N":
            var snare  = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "n":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "L":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "P":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(this.innerHTML+" key pressed");
            break;
    }
}



// setTimeout(buttonAnimation(currentKey),"20");
 function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },50);
}
