
// * * * *
// * * *
// * *
// *

// for (let i = 4;i >= 1; i--) {

//     for (let j = 1; j <= i ; j++) {
//         process.stdout.write(i + " ")
//     }
//     console.log()
// }

// ****
//  ***
//   **
//    *

// for (i = 4; i >= 1; i--) {
//     // print spaces
//     for (let j = 1; j <= 4 - i; j++) {
//         process.stdout.write(" ")
//     }
//     // print stars
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

// full star pyramid
//        *
//      * * *
//    * * * * *
//  * * * * * * * 
// * * * * * * * * *

let n = 5
for (let i = 1; i <= n; i++) {
    // spaes
    for(let j = 1; j <= n-i; j++) {
         process.stdout.write(" ")
    }
    // stars
    for(let k = 1; k <= (2 * i - 1); k++) {
         process.stdout.write("*")
    }
    console.log()
}

