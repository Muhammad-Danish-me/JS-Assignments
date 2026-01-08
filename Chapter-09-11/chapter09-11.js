// Q.1
var cityName = prompt("Enter your city name: ");
if (cityName === "karachi" || cityName === "Karachi") {
  alert("welcome to city of lights");
} else {
  alert("Welcome to " + cityName);
}

// Q.2
var gender = prompt("Enter your Gender: ");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma’am");
} else {
  alert("enter your " + gender);
}

// Q.3
var color = prompt("Enter color of road traffic signal: ");
if (color === "red") {
  alert("Must Stop");
} else if (color === "yellow") {
  alert("ready to move");
} else if (color === "green") {
  alert("move now");
} else {
  alert("invalid color");
}

// Q.4
var fuel = +prompt("Enter remaining fuel in car (in litres) ");
if (fuel < 0.25) {
  alert("“Please refill the fuel in your car");
} else {
  alert("you have enough fuel");
}

// Q.5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Q.6
var sub1 = +prompt("Enter marks of subject 1");
var sub2 = +prompt("Enter marks of subject 2");
var sub3 = +prompt("Enter marks of subject 3");

var totalMarks = 300;

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

if (percentage >= 80) {
  var grade = "A-one";
  var remarks = "Excellent";
} else if (percentage >= 70) {
  var grade = "A";
  var remarks = "Good";
} else if (percentage >= 60) {
  var grade = "B";
  var remarks = "you need to improve";
} else if (percentage < 60) {
  var grade = "Fail";
  var remarks = "Sorry";
} else {
  alert("please enter the correct marks and percentage");
}

document.write("<h1>MarkSheet</h1>");
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + obtainedMarks);
document.write("<br>Percentage: " + percentage + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);

// Q.7
var secretNum = 8;
var userNum = +prompt("guess the secret number");

if (userNum === secretNum) {
  alert("correct answer");
} else if (userNum === secretNum + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("wrong number");
}

// Q.8
var userInput = +prompt("Enter a number: ");
if (userInput % 3 === 0) {
  alert("Number is divisible by 3");
} else {
  alert("Number is not divisible by 3");
}

// Q.9
var userInput = +prompt("Enter a number");
if (userInput % 2 === 0) {
  alert("the number is even");
} else {
  alert("the number is odd");
}

// Q.10
var temperature = +prompt("Enter Temperature with range(0 - 50): ");
if (temperature > 40) {
  alert("It is too hot outside");

} else if (temperature > 30) {
  alert("The Weather today is Normal.");

} else if (temperature > 20) {
  alert("Today’s Weather is cool");
  
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool");
  
} else {
  alert("Enter the correct temperature");
}
