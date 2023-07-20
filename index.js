var randomDecimal = Math.random();
var randomNumber1 = Math.floor(randomDecimal * 6) + 1;
console.log(randomNumber1);

var randomDecimal = Math.random();
var randomNumber2 = Math.floor(randomDecimal * 6) + 1;
console.log(randomNumber2);

//Make randomNumber1 equal one of dicepngs//
//document.querySelector(.img1).attributes;
//document.querySelector(src).getAttribute;//
//okay//
 
var firstImagesrc="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src", firstImagesrc);

var firstImagesrc="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src", firstImagesrc);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
} else {
    document.querySelector('h1').innerHTML = "Draw";
} 