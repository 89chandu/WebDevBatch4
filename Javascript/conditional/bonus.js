// Employee Bonus Calculator
// Based on age and exp

const prompt = require("prompt-sync")();

let name = prompt("Enter Employee Name :")
let salary = Number(prompt("Enter Salary :"))
let exp = Number(prompt("Enter Experience :"))

let bonusPercentage = 0

if (exp >= 10) {
    bonusPercentage = 20
} else if (exp >= 5) {

    bonusPercentage = 10

} else if (exp >= 2) {
    bonusPercentage = 5
} else {
    bonusPercentage = 0
}

let bonusAmount = salary * bonusPercentage / 100
let finalSalary = salary + bonusAmount

console.log("==== Employee Bonus Export")

console.log("Employee Name :",name)
console.log("Employee Salary :",salary)
console.log("Experience :",exp)
console.log("Bonus % :",bonusPercentage)
console.log("Bonus Amount :",bonusAmount)
console.log("Final salary :",finalSalary)

