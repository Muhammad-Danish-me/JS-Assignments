// Chapter 21 to 25
// Q.1
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")

var fullName = firstName + " " + lastName
console.log("Hi! " + fullName)

// Q.2
var mobile = prompt("Enter Your Favorite Mobile Phone Model.");
document.write(
  "My Favorite phone is: " +
    mobile +
    "<br>" +
    "Length of string: " +
    mobile.length
);

// Q.3
var Country = "Pakistani";
var Index = Country.indexOf("n");

document.write("String " + Country + "<br>" + " index of n:" + Index);

// Q.4
var word = "Hello world";
var findLastIndex = word.lastIndexOf("l");

document.write(
  "String: " + word + "<br>" + "Last index of l: " + findLastIndex
);

// Q.5
var myCountry = "Pakistani";
var findThirdIndex = myCountry.charAt("3");

document.write(
  "String: " + myCountry + "<br>" + "character at index 3: " + findThirdIndex
);

// Q.6
var firstName2 = prompt("Enter your first name");
var lastName2 = prompt("Enter your last name");

var fullName2 = firstName2.concat(" " + lastName2); // concat() method is used to join two or more strings.

console.log("Hello, " + fullName2);

// Q.7
var cityName = "Hyderabad";
var replaceCityName = cityName.replace("Hyder", "Islam");

document.write(
  "City:  " + cityName + "<br>" + "After Replacement: " + replaceCityName
);

// Q.8
var message =
  "Ali and Sami are best friends. They play cricket and football together";
var replaceMessage = message.replaceAll("and", "&");

document.write(
  "Message: Ali and Sami are best friends. They play cricket and football together" +
    "<br>" +
    "After Replacement:  " +
    replaceMessage
);

// Q.9
var originalString = "472";
console.log(originalString + " " + typeof originalString);

var convertNumber = Number(originalString);
console.log(convertNumber + " " + typeof convertNumber);

// Q.10
var userInput = prompt("Enter anything");

console.log(userInput.toUpperCase());

// Q.11
var userInput1 = prompt("Enter anything");

var titleCase =
  userInput1.charAt(0).toUpperCase() + userInput1.slice(1, userInput1.length);

console.log("User Input: " + userInput1 + "\nTitle Case: " + titleCase);

// Q.12
var num = 35.36;
var convertNum = num.toFixed(0);

console.log("Number: " + num + "\nResult: " + convertNum);
