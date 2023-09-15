//Todo Assignment # 9

// Chapter 12 - 13

// ! Question 1
var input = 'T';

if (input >= '0' && input <= '9') {
    console.log("Input is a number");
} else if (input >= 'A' && input <= 'Z') {
    console.log("Input is an uppercase letter");
} else if (input >= 'a' && input <= 'z') {
    console.log("Input is a lowercase letter");
} else {
    console.log("Input is not a number or letter");
}

// ! Question 2
var num1 = 10; 
var num2 = 20; 

if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both numbers are equal");
}

// ! Question 3
var number = 7;

if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// ! Question 4
var character = 't'; 

var vowels = 'aeiouAEIOU';

if (vowels.indexOf(character) !== -1) {
    console.log(character + " is a vowel");
} else {
    console.log(character + " is not a vowel");
}

// ! Question 5
var correctPassword = "TopGun2"; 
var userInput = prompt("Please enter your password");

if (!userInput) {
    console.log("Please enter your password");
} else if (userInput === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// ! Question 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);




// Chapter 14 - 16

// ! Question 1
var emptyArray = [];

// ! Question 2
var emptyArray = new Array();


// ! Question 3
var fruitNames = ["apple", "banana", "cherry", "date"];


// ! Question 4
var numbers = [1, 2, 3, 4, 5];


// ! Question 5
var boolValues = [true, false, true, true, false];


// ! Question 6
var mixedArray = ["apple", 123, true, "banana", false];


// ! Question 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<b>Educational Qualifications in Pakistan:</b><br>");
for (var i = 0; i < qualifications.length; i++) {
    document.write(qualifications[i] + "<br>");
}


// ! Question 8
var studentNames = ["Michael","John","Tony"];
var studentScores = [320,230,480];
var totalMarks = 500;

document.write("<b>Student Scores:</b><br>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage : " + percentage.toFixed(2) + "%<br>");
}

// ! Question 9
var colorNames = ["Red", "Green", "Blue"];

// a. Add color to the beginning
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorNames.unshift(colorToAddAtBeginning);

// b. Add color to the end
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorNames.push(colorToAddAtEnd);

// c. Add two more colors to the beginning
colorNames.unshift("Yellow", "Purple");

// d. Delete the first color
colorNames.shift();

// e. Delete the last color
colorNames.pop();

// f. Add color at a specific position
var position = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color you want to add:");
colorNames.splice(position, 0, colorToAdd);

// g. Delete colors from a specific position
var deletePosition = prompt("Enter the index from where you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colorNames.splice(deletePosition, numberOfColorsToDelete);

document.write("<b>Updated Color Array:</b> " + colorNames.join(", "));


// ! Question 10
var studentScores = [90, 78, 88, 94, 82];
console.log("Scores of students "+ studentScores)
studentScores.sort(function(a, b) {
    return a - b;
});

console.log("Ordered Scores of students " + studentScores);

// ! Question 11
var cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi"];
var selectedCities = cities.slice(1, 4);
console.log("Cities list: " + cities)
console.log("Selected Cities list: " + selectedCities);

// ! Question 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log("Array: " + arr)
console.log("Single String: " + singleString);


