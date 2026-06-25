// 01: Gaming Cafe Challenge (Most Important)
// Ask: Age
// Rules:
// Under 12 → Not Allowed 
// 12–17 → Rs. 200/hour 
// 18+ → Rs. 400/hour

var age = prompt("Enter your Age");

if (age < 12) {
    console.log("Not Allowed");

}
else if (age >= 12 && age < 18) {
    console.log("Rs. 200/ hour");

}
else {
    console.log("Rs. 400/ hour");

}



// 02: Shopping Discount
// Rules:
// Bill > 5000 → 20% discount 
// Bill > 3000 → 10% discount 
// Otherwise → No discount 

var bill = prompt("How much is your Bill")
if (bill > 5000) {
    console.log("20% Discount");

}
else if (bill >= 3000 && bill <= 5000) {
    console.log("10% Discount");

}
else {
    console.log("No Discount");
}


// 03: Online Game Level Checker
// Ask: Player's score
// Rules:
// Score 0–100 → Level 1 (Beginner)
// Score 101–300 → Level 2 (Intermediate)
// Score 301–500 → Level 3 (Advanced)
// Score 501+ → Level 4 (Master)
// Output: Display the player's level

var score = prompt("What is your current score?")
if (score >= 0 && score <= 100) {
    console.log("Beginner");
}
else if (score >= 101 && score <= 300) {
    console.log("Intermediate");
}
else if (score >= 301 && score <= 500) {
    console.log("Advanced");
}
else if (score < 0) {
    console.log("Invalid Score");

}
else {
    console.log("Master");
}


// 04: Multiplication Table Generator
// Ask: Number (for which table is required)
// Rules:
// •	Use a loop (for or while) only
// •	Print multiplication table from 1 to 10
// Output: Display the full multiplication table of the given number up to 10

var num = prompt("Enter a Number")
for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);

}


    // Ques:05 Write a function named calculateSalary that calculates an employee’s final salary. The function should take three inputs: base salary, bonus amount, and tax percentage.

    // First, combine the base salary and bonus to get the total income. Then apply tax on this total income using the given percentage. Finally, return the remaining amount after tax deduction as the final salary.

    function calculateSalary(baseSalary, bonus, taxPercent) {
        return (baseSalary + bonus) - ((baseSalary + bonus) * taxPercent / 100)
    }

    console.log(calculateSalary(30000, 10000, 10));

    // Ques:06 Write a function named convertToPKR that converts an amount from US Dollars (USD) to Pakistani Rupees (PKR). The function should take two inputs: the amount in dollars and the exchange rate.

    // Multiply the dollar amount by the exchange rate and return the result as the amount in PKR.


    function convertToPkr(dollar, rate) {

        return (dollar * rate)
    }

    console.log(convertToPkr(300, 280));


    // Ques:07 Write a function named fuelCost that calculates the total fuel expense for a trip. The function should take two inputs: the number of kilometers traveled and the fuel cost per kilometer.

    // Multiply the distance traveled by the cost per kilometer and return the total fuel expense.

    function fuelCost(kilometers, costPerKilometer) {

        return (kilometers * costPerKilometer)
    };

    console.log(fuelCost(50, 12));


    // Ques:08 Write a function named rectanglePerimeter that calculates the perimeter of a rectangle. The function should take two inputs: length and width.

    // Use the standard perimeter formula of a rectangle to compute the result and return the final value.

    function rectanglePerimeter(length, width) {

        return (2 * (length + width))
    }

    console.log(rectanglePerimeter(10, 5))


    

// Ques:09 Employee Final Salary Calculator
// An employee's final salary needs to be calculated based on their basic salary, overtime pay, late deductions, and absent deductions. Write a program that creates a function to calculate the final salary by adding the overtime pay to the basic salary and subtracting the late and absent deductions. Return the final payable salary.

var basicSalary = 50000;

var overTimeHours = 3; 
var overTimeRate = 5000;

var absentDays = 2;
var dailySalaryRates = 1600;

var lateHours = 2;
var lateDeductionRate = 1000;

function overTimePay(overTimeHours , overTimeRate){
    return( overTimeHours * overTimeRate)
}

function lateDeduction(lateHours , lateDeductionRate){
    return(lateHours * lateDeductionRate)
}

function absentDeduction(absentDays , dailySalaryRates){
    return(absentDays * dailySalaryRates)
}

function calculateFinalSalary(basicSalary, overTimePay, lateDeduction, absentDeduction){
    return((basicSalary + overTimePay) - (lateDeduction + absentDeduction))
}

console.log(calculateFinalSalary(
    basicSalary,
    overTimePay(overTimeHours, overTimeRate),
    lateDeduction(lateHours, lateDeductionRate),
    absentDeduction(absentDays, dailySalaryRates)
));

// Ques:10 Display Student Information
// Create an array named stuInfo that contains a student's name, age, and city. Use a for loop to go through each element of the array and display every value in the console, one at a time. The program should print all the information stored in the array without accessing the elements manually by their index.

var stuInfo = ["sheraz" , 25 , "karachi"]

for (var i = 0; i< stuInfo.length; i++){
    console.log(stuInfo[i]);

}


// Ques:11 Shopping Cart Total Calculator
// An online shopping website stores the prices of all items added to a customer's cart in an array. The system needs to calculate the total amount the customer has to pay.
// Write a program that goes through each item price in the cart using a loop, adds all prices together, and displays the final cart total.
// Use an array to store item prices and a loop to calculate the sum of all values.

var cartTotal = [250, 500, 1000, 150, 300]
var sum= 0

for( var i= 0; i < cartTotal.length; i++)
     sum += cartTotal[i]
    console.log(sum);
