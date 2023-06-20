
var dice1 = Math.floor(6*(Math.random()))+1;
var dice2 = Math.floor(6*(Math.random()))+1;

// var randomPathImage1 = "images/dice"+dice1+".png";
var randomPathImage2 = "images/dice"+dice2+".png";

document.querySelectorAll("img")[0].src="images/dice"+dice1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomPathImage2);

if(dice1>dice2){
    document.querySelector("h1").textContent = "✌ Player 1 wins"; 
}
else if(dice1<dice2){
    document.querySelector("h1").textContent = "Player 2 wins ✌"; 
}
else{
    document.querySelector("h1").textContent = "It's an Draw roll it again";
     
}