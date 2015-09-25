//JS Workshop Monday 9/14

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log("Question 1. Log your name to the console (as a string).");
console.log("My name is Colin Osborn");
//2. Declare a variable called name, log it to the console.
console.log("Question 2. Declare a variable called name, log it to the console.");
var name = "Colin Osborn";
console.log(name);
//3. Declare two variables with number values. Add, subtract, multiply and divide them.
console.log("Question 3. Declare two variable with number values. Add, subtract, multiply and divide them.");
var num1 = 16
var num2 = 3
console.log(num1 + num2);
console.log(num1 - num2);
//4. Declare two variables with string values. Create a third variable that concatenates them.
console.log("Question 4. Declare two variables with string values. Create a third variable that concatenates them.");
var person = "Colin Osborn";
var greeting = "Hello! " + person + "!";
console.log(greeting);
//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
console.log("Question 5. Add, subtract, multiply and divide the strings 5 and 3. Observe and explain the resutls.");
var firstSt = 5
var secondSt = 3
console.log(firstSt + secondSt);
console.log(firstSt + secondSt);
console.log(firstSt * secondSt);
console.log(secondSt / firstSt);
//6. Create a prompt that asks a user to pick a number. Double the answer.
console.log("Question 6. Create a prompt that asks a user to pick a number. Double the answer.");
var responseNum = prompt("Pick a number.") * 2;
console.log(responseNum);
//7. Create a custom alert.
console.log("Question 7. Create a custom alert.");
alert("This is an alert!");
//8. Declare three variables called length, width and height. Calculate area and volume.
console.log("Question 8. Declare three variables called length, width and height. Calculate area and volume.");
var length = 7.5;
var width = 5.5;
var height = 3;
console.log("Area: " + length * width);
console.log("Volume: " + length * width * height);
//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
console.log("Question 9. Ask for a user's name, age and city. In a single command display/log the sentence: My name is...I'm....years old, and I live in.");
var fullName = prompt("What is your name?");
var age = prompt("What's your age?");
var city = prompt("In what city or town do you live?");
console.log("My name is "+ fullName + "," + " I am " + age + ", and I live in " + city );
//10. Create an alert that uses the response from a prompt.
console.log("Question 10. Create an alert that uses the response from a prompt.");
var prolert = prompt("Are you sure you want to proceed?");
alert("Thank you");
