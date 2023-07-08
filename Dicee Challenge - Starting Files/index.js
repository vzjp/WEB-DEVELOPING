var player1_dice = Math.floor(Math.random() * 6) + 1;
var player2_dice = Math.floor(Math.random() * 6) + 1;

var player1_dice_img = document.querySelector(".img1");
var player2_dice_img = document.querySelector(".img2");

var h1_element = document.querySelector("h1");

player1_dice_img.setAttribute("src", "./images/dice"+player1_dice+".png");
player2_dice_img.setAttribute("src", "./images/dice"+player2_dice+".png");

if(player1_dice > player2_dice){
    h1_element.innerHTML = '&#X1F6A9 Player 1 won!';
}else if(player1_dice < player2_dice){
    h1_element.innerHTML = 
    'Player 2 won! &#X1F6A9';
}else{
    h1_element.innerHTML = "Draw";
}
