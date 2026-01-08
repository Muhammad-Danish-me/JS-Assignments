// Q.1
var a = 10;
document.write("The value of a is: " + a + "<br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
a++;
document.write("The value of a++ is: " + a + "<br>");
--a;
document.write("The value of --a is: " + a + "<br>");
a--;
document.write("The value of a-- is: " + a + "<br>");


// Q.2
var a = 2
var b = 1
var result = --a - --b + ++b + b--
//            1  -   0  +  1  +  1

// -- a  = 1
//  --a - --b  =  0
// --a - --b + ++b  =  1
// --a - --b + ++b + b--  =  1

document.write("your result is " + result )  // Result is 3


// Q.3
var userName = prompt("Enter your Name")

alert("Assalam u alaikum " + userName )


// Q.6
var sub1 = prompt("enter your first subject name")
var sub2 = prompt("enter your second subject name")
var sub3 = prompt("enter your third subject name")

var totalMarks = 100

var obtainedMarks1 = prompt ("enter obtained marks for " + sub1 + ":")
var obtainedMarks2 = prompt ("enter obtained marks for " + sub2 + ":")
var obtainedMarks3 = prompt ("enter obtained marks for " + sub3 + ":")


document.write("<table border = '1'>");
document.write("<tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td> " + sub1 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks1 + " </td> <td> " + (obtainedMarks1 / totalMarks) * 100 + "% </td> </tr>");
document.write("<tr> <td> " + sub2 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks2 + " </td> <td> " + (obtainedMarks2 / totalMarks) * 100 + "% </td> </tr>");
document.write("<tr> <td> " + sub3 + " </td> <td> " + totalMarks + " </td> <td> " + obtainedMarks3 + " </td> <td> " + (obtainedMarks3 / totalMarks) * 100 + "% </td> </tr>");
document.write("</table>")