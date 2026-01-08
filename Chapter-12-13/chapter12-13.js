// Q.1
var inputLetter = prompt("Enter a letter");
var letter = inputLetter.charCodeAt(0);

if(letter >= 65 && letter <= 90){
    console.log("Uppercase letter");
}else if(letter >= 97 && letter <= 122){
    console.log("Lowercase letter");
}else{
    console.log("Not a letter");
}

// Q.2
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
}else if (num1 < num2){
    console.log(num1 + " is less than " + num2);
}else if (num1 === num2){
    console.log(num1 + " is equal to " + num2);
}else{
    console.log("Invalid input");
}


// Q.3
var inputNum = +prompt("Enter a number");

if(inputNum > 0){
    console.log("Number is positive");
}else if(inputNum < 0){
    console.log("Number is negative");
}else if (inputNum === 0){
    console.log("Number is zero");
}else{
    console.log("Invalid Number");
}


// Q.4
var stringCharacter = prompt("Enter a character");

if(stringCharacter === "a" || stringCharacter === "e" || stringCharacter === "i" || stringCharacter === "0" || stringCharacter === "u"){
    console.log("True");
}else{
    console.log("False");
}



// Q.5
var correctPassword = "helloworld123"
var inputPassword = prompt("Enter your Password")

if (correctPassword === inputPassword){
    console.log("Correct! The password you entered matches the original password")
}else if(correctPassword !== inputPassword){
    console.log("Please enter your correct password");
}


// Q.6
var greeting;
var hour = 13;

if(hour < 18){
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

console.log(greeting);



// Q.7
var time = +prompt("Enter time in 24 hour format");

if(time >=0 && time < 1200){
    console.log("Good morning");
}else if(time >= 1200 && time < 1700){
    console.log("Good afternoon");
}else if(time >= 1700 && time < 2100){
    console.log("Good evening");
}else if(time >= 2100 && time <= 2359){
    console.log("Good night");
}else {
    console.log("Invalid input");
}