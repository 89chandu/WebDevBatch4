// conitional statements


// const prompt = require("prompt-sync")();
// let age = prompt("Enter your age:")

// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("not eligible")
// }

// if
// else
// else if

// const prompt = require("prompt-sync")();
// let marks = prompt("Enter your marks:")

// let marks = 48

// if (marks >= 90) {
//     console.log("Grade A")
// }
// else if (marks >= 70) {
//     console.log("Grade B")
// } 
// else if (marks >= 50) {
//     console.log("Grade C")
// }
// else {
//     console.log("Fail")
// }


// Largest of three numbers

// let a = 10
// let b = 10
// let c = 10

// if (a > b && a > c) {
//     console.log("a is greatter")

// } else if (b > a && b > c) {
//     console.log("b is greater")
// } else if (a == b && a == c) {
//     console.log("All are equal")

// }
// else {
//     console.log("c is greater")
// }


// Atm Withdrawl System

// let balance = 5000

// const prompt = require("prompt-sync")();
// let pin = Number(prompt("Enter Your Pin:"))


// if (pin === 1245) {

//     let withdraw = Number(prompt("Enter your withdraw amount:"))

//     if (withdraw <= balance) {

        
//         balance = balance - withdraw;
//         console.log("withdrawal successfull")
//         console.log("Availabl balance is :",balance)
//     } else {
        
//         console.log("Insufficient balance")
//     }
  
// } else {
//     console.log("plz enter correct pin")
    
// }


// Movie Ticket Price


const prompt = require("prompt-sync")();
let age = Number(prompt("Enter Your age:"))

if (age < 5) {

    console.log("Free Ticket")

} else if (age <= 18) {
    console.log("Ticket Price = 100 ₹")
} else {
    console.log("Ticket Price = 200 ₹")
}


