// Chapter 31 to 34
// Q.1
var date = new Date();
document.write(date + "<br>");

// Q.2
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.write("Current month: " + months[date.getMonth()] + "<br>");

// Q.3
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is " + days[date.getDay()].slice(0, 3));

// Q.4
if (days[date.getDay()] === "Sunday" || days[date.getDay()] === "Saturday") {
  console.log("It’s Fun day");
}

// Q.5
if (date.getDate() <= 15) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}

// Q.6
var currentDate = date.toString();
var getMiliSeconds = date.getTime();
var getMinute = date.getTime() - 1000 * 60 * 60 * 24 * 30 * 12;

console.log("Current Date " + currentDate);
console.log("Elapsed Miliseconds since January 1, 1970: " + getMiliSeconds);
console.log("Elapsed Minutes since january 1, 1970: " + getMinute);

// Q.7
var current_Time = date.getHours();

var localTime = date.toLocaleTimeString();

if (current_Time < 12 && current_Time >= 0) {
  console.log("It's AM " + localTime);
} else {
  console.log("It's PM " + localTime);
}

// Q.8
var laterDate = new Date("31 December 2020");
console.log("Later Date: " + laterDate);

// Q.9
var ramadanStart = new Date(2015, 5, 18);

var today = new Date();

var diffMs = today - ramadanStart;

var daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan (June 18, 2015).");

// Q.10
var referenceDate = new Date();
var start2015 = new Date(2015, 0, 1);

var diffMs = referenceDate - start2015;

var secondsElapsed = Math.floor(diffMs / 1000);

document.write(
  "Seconds elapsed between Jan 1, 2015 and now: " + secondsElapsed + "<br>"
);

// Q.11
var currentDate = new Date();

document.write("Current date: " + currentDate + "<br>");

var currentHours = currentDate.getHours();
document.write("Current hour: " + currentHours + "<br>");

currentDate.setHours(currentHours + 1);

document.write("1 hour later: " + currentDate + "<br>" + "<br>");

// Q.12
var date = new Date();

document.write("Current date: " + date + "<br>");

var currentYear = date.getFullYear();

date.setFullYear(currentYear - 100);

document.write("100 Years Back, it was " + date + "<br>" + "<br>");

// Q.13
var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - Number(age);

document.write(
  "Your age is " +
    age +
    "<br>" +
    "Your birth year is: " +
    birthYear +
    "<br>" +
    "<br>"
);

// Q.14
var customerName = "ABC Customer";
var currentMonth = "February";
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1><br>");

document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
document.write(
  "Charges per unit: <b>" + chargesPerUnit.toFixed(2) + "</b><br><br>"
);

document.write(
  "Net Amount Payable (within Due Date): <b>" +
    netAmount.toFixed(2) +
    "</b><br>"
);
document.write(
  "Late payment surcharge: <b>" + latePaymentSurcharge.toFixed(2) + "</b><br>"
);
document.write(
  "Gross Amount Payable (after Due Date): <b>" + grossAmount.toFixed(2) + "</b>"
);
