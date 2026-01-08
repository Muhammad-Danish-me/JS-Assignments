// Q.1
var num1 = 3;
var num2 = 5;
var result = num1 + num2;
alert(result);

document.write("Sum of " + num1 + " and " + num2 + " is " + result + " <br> ");

// Q.2
var result = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + result + "<br>");

var result = num1 * num2;
document.write("multiplication of " + num1 + " and " + num2 + " is " + result + "<br>");

var result = num1 / num2;
document.write("division of " + num1 + " and " + num2 + " is " + result + "<br>");

var result = num1 * num2;
document.write("modulus of " + num1 + " and " + num2 + " is " + result + "<br>");

// Q.3
var num
document.write("Value after variable declaration is " + num + "<br>")
num = 5
document.write("Initial value: " + num + "<br>")
num++
document.write("Value after increment is: " + num + "<br>")
num = num + 7
document.write("Value after addition is: " + num + "<br>")
num--
document.write("Value after decrement is " + num + "<br>")
num = num % 3
document.write("The remainder is : " + num + "<br>")

// Q.4
var ticket = 600
var ticketPrice = ticket * 5

document.write("total cost of buy 5 tickets to a movie is " + ticketPrice + "PKR")

// Q.5
var table1 = (2*1)
var table2 = (2*2)
var table3 = (2*3)
var table4 = (2*4)
var table5 = (2*5)
var table6 = (2*6)
var table7 = (2*7)
var table8 = (2*8)
var table9 = (2*9)
var table10 = (2*10)

document.write("Table of 2 " + " <br> ")
document.write(" 2 * 1 = " + table1 +" <br> ")
document.write(" 2 * 2 = " + table2 +" <br> ")
document.write(" 2 * 3 = " + table3 +" <br> ")
document.write(" 2 * 4 = " + table4 +" <br> ")
document.write(" 2 * 5 = " + table5 +" <br> ")
document.write(" 2 * 6 = " + table6 +" <br> ")
document.write(" 2 * 7 = " + table7 +" <br> ")
document.write(" 2 * 8 = " + table8 +" <br> ")
document.write(" 2 * 9 = " + table9 +" <br> ")
document.write(" 2 * 10 = " + table10 +" <br> ")

// Q.6
//
//
//

// Q.7
var priceOfItem1 = 650
var  orderedQuantityOfItem1 = 3
var priceOfItem2 = 100
var orderedQuantityOfItem2 = 7
var shippingCharges = 100
var totalCostOfYourOrderIs = priceOfItem1 * orderedQuantityOfItem1 + priceOfItem2 * orderedQuantityOfItem2 + shippingCharges

document.write ("<h1> Shopping Cart </h1>")
document.write("Price of item 1 is " + priceOfItem1 + "<br>")
document.write("Quantity of item 1 is " + orderedQuantityOfItem1 + "<br>")
document.write("Price of item 2 is " + priceOfItem2 + "<br>")
document.write("Quantity of item 2 is " + orderedQuantityOfItem2 + "<br>")
document.write("Shipping Charges " + shippingCharges + "<br>" + "<br>")
document.write("Total cost of your order is  " + totalCostOfYourOrderIs)

// Q.8
var totalMarks = 980;
var marksObtained = 804;
var Percentage = (marksObtained / totalMarks) * 100;
// alert (totalMarks)

document.write("<h1> Marks Sheet </h1> "+ "<br>" + "<br>");

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + Percentage + "%");


// Q.9
var usDollar = 104.80 * 10
var saudiRiyal = 28 * 25

var totalCurrencyInPkr = usDollar + saudiRiyal
alert (totalCurrencyInPkr)

document.write ("<h1> Currency in PKR </h1>" + "<br>"+ "<br>")
document.write ("Total currency in PKR: " + totalCurrencyInPkr + "<br>" )


// Q.10
var num = 5 
num = (num + 5) * 10 / 2 


document.write("result: " + num)

// Q.11 
var currentYear = 2024
var birthYear = 2005
var yourAge = currentYear - birthYear
// alert (yourAge)

document.write("<h1> Age Calculator </h1>" + "<br>" + "<br>")
document.write("Cuurent Year: " + currentYear + "<br>")
document.write("Birth Year: " + birthYear + "<br>")
document.write("Your Age: " + yourAge + "<br>")

// Q.13
var favoriteSnack = ("chocolate chip")
var currentAge = 15
var maximamAge = 65
var StoreAnEstimatedAmountPerDay = 3
var totalEat = (maximamAge - currentAge) * StoreAnEstimatedAmountPerDay
// alert (totalEat) 

document.write("<h1> The Lifetime Supply Calculator: </h1>" + "<br>" + "<br>")
document.write("favorite Snack: " + favoriteSnack + "<br>")
document.write(" Current Age: " + currentAge + "<br>")
document.write(" Maximum Age: " + maximamAge + "<br>")
document.write("You will Need " + totalEat + " chocolate chip to last you until the ripe old age of "+ maximamAge +"<br>")