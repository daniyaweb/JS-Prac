// Gaming Cafe Challenge (Most Important)
// Ask: Age
// Rules:
// Under 12 → Not Allowed 
// 12–17 → Rs. 200/hour 
// 18+ → Rs. 400/hour

// var age = prompt("Enter your Age");

// if (age < 12) {
//     console.log("Not Allowed");
    
// }
//     else if (age >= 12 && age < 18) {
//     console.log("Rs. 200/ hour");
    
// }
// else {
//     console.log("Rs. 400/ hour");
    
// }



// Shopping Discount
// Rules:
// Bill > 5000 → 20% discount 
// Bill > 3000 → 10% discount 
// Otherwise → No discount 

// var bill = prompt("How much is your Bill")
//     if( bill > 5000){
//         console.log("20% Discount");
        
//     }
//         else if( bill >= 3000 && bill <=5000 ){
//             console.log("10% Discount");
            
//         }
//         else{
//            console.log("No Discount");
//         }


// Online Game Level Checker
// Ask: Player's score
// Rules:
// Score 0–100 → Level 1 (Beginner)
// Score 101–300 → Level 2 (Intermediate)
// Score 301–500 → Level 3 (Advanced)
// Score 501+ → Level 4 (Master)
// Output: Display the player's level

// var score = prompt("What is your current score?")
//     if(score >=0 && score <= 100){
//         console.log("Beginner");
// }
//         else if(score >=101 && score <= 300){
//         console.log("Intermediate");
//     }
// else if(score >= 301 && score <= 500){
//         console.log("Advanced");
// }
// else if(score <0 ){
//     console.log("Invalid Score");
    
// }
// else{console.log("Master");
// }


// Multiplication Table Generator
// Ask: Number (for which table is required)
// Rules:
// •	Use a loop (for or while) only
// •	Print multiplication table from 1 to 10
// Output: Display the full multiplication table of the given number up to 10

var num= prompt("Enter a Number")
for (let i= 1; i<= 10; i++){
    console.log(num, "X" , i , "=" , num* i);
    
}