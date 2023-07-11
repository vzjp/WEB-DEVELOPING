//Detecting button pressed.
var buttons = document.querySelectorAll("button.drum");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        playSound(key);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard pressed.
document.addEventListener("keydown", function(ev){
    playSound(ev.key);
    buttonAnimation(ev.key);
})

function playSound(key) {
    switch (key) {
        case "w":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();

            break;
        case "a":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();

            break;
        case "s":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();

            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();

            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();

            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();

            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}