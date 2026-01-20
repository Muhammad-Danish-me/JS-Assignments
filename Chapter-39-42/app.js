// Chapter 39 to 42
// Q.1
let age = +prompt("Enter Age");

switch (true) {
  case age > 18:
    console.log("Old enough");
    break;
  default:
    console.log("Too young");
}

// Q.2
let num = parseInt(prompt("Enter a number:"));

switch (num % 3) {
  case 0:
    console.log("Number is divisible by 3");
    break;
  default:
    console.log("Number is not divisible by 3");
}

// Q.3
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var operator = prompt("Enter Operator (+, -, *, /, %)");

switch (operator) {
  case "+":
    console.log("Add ", number1 + number2);
    break;
  case "-":
    console.log("Subtract ", number1 - number2);
    break;
  case "*":
    console.log("Multiply ", number1 * number2);
    break;
  case "/":
    console.log("Divide ", number1 / number2);
    break;
  case "%":
    console.log("Modulus ", number1 % number2);
    break;
  default:
    console.log("Invalid operator");
}

// Q.4
var date = new Date();
var day = date.getDay();

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}

// Q.5
var date = new Date();
var day = date.getDay();

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Today is a weekday");
}

// Q.6
// function checkCar() {
//   var text;
//   var favCar = prompt("What is your favorite car?");
//   switch (favCar) {
//     case "BMW":
//       text = "German car";
//       break;
//     case "Ford":
//       text = "American car";
//       break;
//     case "Peugeot":
//       text = "French car";
//       break;
//     default:
//       console.log("Unknown car name");
//   }
//   document.write(text);
// }
// checkCar();

// Q.7
function checkFruit() {
  var text;
  var fruits = prompt("Enter a fruit name");
  switch (fruits) {
    case "Banana":
      text = "Banana is good!";
      break;
    case "Orange":
      text = "I am not a fan of orange.";
      break;
    case "Apple":
      text = "How you like them apples?";
      break;
    default:
      text = "I have never heard of that fruit.";
  }
  document.write(text);
}
checkFruit();
