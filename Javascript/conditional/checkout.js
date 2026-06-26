
const prompt = require("prompt-sync")();

console.log("==== PRODUCTS====")
console.log("1. Laptop - 40000")
console.log("2. Mouse - 500")
console.log("3. Keyboard - 1000")
console.log("4. Headphone - 1500")

let choice = Number(prompt("Select Product (1-4): "))
let qty = Number(prompt("Enter Quantity: "))

let price = 0

if (choice === 1) {
    price = 40000
} 
else if (choice === 2) {
    price = 500
}
 else if (choice === 3) {
    price = 1000
 }
 else if (choice === 4) {
    price = 1500
 }

 else {
    console.log("Invalid Products")
    process.exit()
 }

 let total = price * qty

 let discount = 0

 if (total >= 20000) {
    discount = total * 20 / 100
 }

 else if (total >= 5000) {
    discount = total * 10 / 100
 }

 let amountAfterDiscount = total - discount;

 let gst = amountAfterDiscount * 18 / 100

 let finalAmount = amountAfterDiscount + gst

 console.log("\n====BILL=====")


console.log("==== PRODUCTS====")
console.log("Product Price :",price)
console.log("Quantity :",qty)
console.log("Total Amount :",total)


console.log("Discount :",discount)
console.log("GST 18% :",gst)
console.log("Final Amount :",finalAmount)



