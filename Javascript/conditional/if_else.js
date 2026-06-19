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


// const prompt = require("prompt-sync")();
// let age = Number(prompt("Enter Your age:"))

// if (age < 5) {

//     console.log("Free Ticket")

// } else if (age <= 18) {
//     console.log("Ticket Price = 100 ₹")
// } else {
//     console.log("Ticket Price = 200 ₹")
// }


// login system

// const prompt = require("prompt-sync")();

// let username =prompt("Enter Your username:")
// let password =prompt("Enter Your password:")

// // let username = "admin"
// // let password = "1234"

// if (username === "admin" && password === "1234") {
//     console.log("Login Success")

// } else {
//     console.log("Invalid Credentials")
// }


// Discount Calculator

// const prompt = require("prompt-sync")();

// let shopping_amount =prompt("Enter Your shopping_amount:")
// let discount = 0
// let finalAmount

// if (shopping_amount > 5000) {
    
//     discount  = shopping_amount * 20 / 100
//     finalAmount = shopping_amount - discount
// }
// else if (shopping_amount > 2000) {

//     discount  = shopping_amount * 10 / 100
//     finalAmount = shopping_amount - discount


// } else {
//     finalAmount = shopping_amount
// }

// console.log("Original Amount :",shopping_amount)
// console.log("Discount Amount :",discount)
// console.log("Final Amount You Have To Pay:",finalAmount)


// Eletricity Bill

// let units = 150
// let bill

// if (units <= 100) {
//     bill = units * 5
// }

// else if (units <= 200) {
//     bill = units * 7
// }

// else {
//     bill = units * 10
// }

// console.log("Bill Amount: ",bill)

// 2- digit , 3-digit , 4-digit


const prompt = require("prompt-sync")();
let num = prompt("Enter Your num:")

// let num = -12

num = Math.abs(num)

if (num >= 10 && num <= 99) {
    console.log("2 Digit Number")
}
else if (num >= 100 && num <= 999) {
    console.log("3 digit Number")
}
else if (num >= 1000 && num <= 9999) {
    console.log("4 Digit Number")
} else {
    console.log("Not a 2, 3 or 4 digit Number")
}









