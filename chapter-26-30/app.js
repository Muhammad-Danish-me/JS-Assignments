// Chapter 26 to 30
// Q.1
var positiveInteger = +prompt("Enter a positive integer number");

document.write("Number: " + positiveInteger + "<br>");
document.write("Round off value: " + Math.round(positiveInteger) + "<br>");
document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

// Q.2
var negativeNumber = +prompt("Enter a negative floating point number:");

document.write("Number: " + negativeNumber + "<br>");
document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br>");

// Q.3
var num = +prompt("Enter a number:");

document.write("Number: " + num + "<br>");
document.write("Absolute value: " + Math.abs(num) + "<br>");

// Q.4
var dice = Math.floor(Math.random() * 6 + 1);

console.log("Random Dice Value: " + dice);

// Q.5
var coinsValue = Math.floor(Math.random() * 2 + 1);

if (coinsValue === 1) {
  console.log(coinsValue);
  document.write("Random Coin Value: Tails" + "<br>");
} else {
  console.log(coinsValue);
  document.write("Random Coin Value: Heads" + "<br>");
}

// Q.6
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum + "<br>");

// Q.7
var userInput = prompt("Enter your weight:");

var weight = parseFloat(userInput);

document.write("Your weight is: " + weight + " kilogram");

// Q.8
var userInput = +prompt("Guess a number between 1 and 10");
var secretNum = Math.floor(Math.random() * 10) + 1;

if (userInput === secretNum) {
  console.log("congratulate for Correct guess");
} else {
  console.log(secretNum);
  console.log("Wrong! Better luck Next time.");
}
