// Chapter 35 - 38
// Q.1
function displayDate() {
  var date = new Date();
  document.write(date + "<br>" + "<br>");
}
displayDate();

// Q.2
function greet() {
  var firstName = prompt("Enter First Name");
  var lastName = prompt("Enter Last Name");
  var fullName = firstName + " " + lastName;
  document.write(fullName + "<br>");
}

greet();

// Q.3
function add(num1, num2) {
  return num1 + num2;
}

var firstNum = +prompt("Enter First Number");
var secondNum = +prompt("Enter Second Number");

var result = add(firstNum, secondNum);

document.write(
  "The sum of " +
    firstNum +
    " and " +
    secondNum +
    " is " +
    result +
    "<br>" +
    "<br>"
);

// Q.4
function calculator(num1, num2, operator) {
  var result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else {
    return "Invalid Operator" + "<br>" + "<br>";
  }
  return result;
}

var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var operator = prompt("Enter Operator (+, -, *, /):");

var output = calculator(number1, number2, operator);

document.write("Result: " + output);

// Q.5
function square(number) {
  return number * number;
}

var value = Number(prompt("Enter a number:"));
var result = square(value);

document.write("Square of " + value + " is: " + result + "<br>" + "<br>");

// Q.6
function factorial(num) {
  var result = 1;

  for (var i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

var number = Number(prompt("Enter a number:"));

var answer = factorial(number);

document.write("Factorial of " + number + " is: " + answer + "<br>" + "<br>");

// Q.7
function showCounting(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

var startNum = +prompt("Enter Start Number");
var endNum = +prompt("Enter End Number");

showCounting(startNum, endNum);

// Q.10
function isPalindrome(str) {
  var userStr = str.toLowerCase();

  var reversedStr = userStr.split("").reverse().join("");

  if (userStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

var word = prompt("Enter a word:");

var result = isPalindrome(word);

if (result) {
  document.write(word + " is a Palindrome");
} else {
  document.write(word + " is not a Palindrome");
}


