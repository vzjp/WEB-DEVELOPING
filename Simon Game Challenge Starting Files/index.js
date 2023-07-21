var quizeManager = {
    seane : {
        opening : 0,
        inprogress : 1,
        gameOver : 2,
    },
    mySeane : 0,
    level : 0,
    sequense : [], //this contains color sequense.
    answering : 0, //this is used to check answer.
}

$(".btn").on("click", function(ev){
    flash(ev.target.id);
    if(quizeManager.mySeane === quizeManager.seane.opening ||
       quizeManager.mySeane === quizeManager.seane.gameOver){
       //do nothing. 
    }else{
        console.log("clicked on " + ev.target.id);
        if(quizeManager.answering < quizeManager.sequense.length - 1){
            if(ev.target.id === quizeManager.sequense[quizeManager.answering]){
                quizeManager.answering += 1;
            }else{
                gameOver();
            }
        }else if(quizeManager.answering < quizeManager.sequense.length){
            if(ev.target.id === quizeManager.sequense[quizeManager.answering]){
                nextLevel();
                quizeManager.answering = 0;
            }else{
                gameOver();
            }
        }
    }
});

$(document).on("keypress", function(ev){
    if(quizeManager.mySeane === quizeManager.seane.opening){
        if(ev.key === "A" || ev.key === "a"){
            console.log("Key " + ev.key + " was pressed in opening");
            startGame();
        }else{
            console.log("Key " + ev.key + " was pressed in opening");
        }
    }else if(quizeManager.mySeane === quizeManager.seane.gameOver){
        console.log("Key " + ev.key + " was pressed in gameover.");
        restartGame();
    }else{
        console.log("Key " + ev.key);
    }
});

function restartGame(){
    quizeManager.mySeane = quizeManager.seane.opening;
    changeTitle();
}

function startGame(){
    quizeManager.mySeane = quizeManager.seane.inprogress;
    changeTitle();
    nextLevel();
}

function nextLevel(){
    changeTitle();
    setTimeout(newQestion, 400);
}

function gameOver(){
    quizeManager.mySeane = quizeManager.seane.gameOver;
    quizeManager.level = 0;
    quizeManager.sequense = [];
    changeTitle();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 300);
}

function changeTitle(){
    if(quizeManager.mySeane === quizeManager.seane.inprogress){
        $("h1").text("Level " + quizeManager.level);
    }else if(quizeManager.mySeane === quizeManager.seane.gameOver){
        $("h1").text("Game Over. Press any key to restart.")
    }else if(quizeManager.mySeane === quizeManager.seane.opening){
        $("h1").text("Press A Key to Start")
    }
}

function newQestion(){
    // nextColor should be 0 <= nexColor <= 3.
    nextColor = Math.floor(Math.random() * 4);
    quizeManager.level += 1;
    switch (nextColor) {
        case 0:
            flash("green");
            quizeManager.sequense.push("green");
            break;
        case 1:
            flash("red");
            quizeManager.sequense.push("red");
            break;
        case 2:
            flash("yellow");
            quizeManager.sequense.push("yellow");
            break;
        case 3:
            flash("blue");
            quizeManager.sequense.push("blue");
            break;
    
        default:
            break;
    }
}

/*
params target : [green|red|yellow|blue]
*/
function flash(target){
    $("#" + target).addClass("pressed");
    setTimeout(function(){
        $("#" + target).removeClass("pressed");
    }, 300);
}