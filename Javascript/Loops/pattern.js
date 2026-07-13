
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

// let n = 5
// for (let i = 1; i <= n-1; i++) {
//     // spaes
//     for(let j = 1; j <= n-i; j++) {
//          process.stdout.write(" ")
//     }
//     // stars
//     for(let k = 1; k <= (2 * i - 1); k++) {
//          process.stdout.write("*")
//     }
//     console.log()
// }
// for (let i = n; i >= 1; i--) {
//     // spaes
//     for(let j = 1; j <= n-i; j++) {
//          process.stdout.write(" ")
//     }
//     // stars
//     for(let k = 1; k <= (2 * i - 1); k++) {
//          process.stdout.write("*")
//     }
//     console.log()
// }

//       1
//     1 2 1
//   1 2 3 2 1    
// 1 2 3 4 3 2 1
// number pyramid

// let n = 4

// for(let i = 1; i <= n; i++) {

//     // spaces
//     for (let j = 1; j <= n-i; j++) {
//         process.stdout.write(" ")
//     }

//     // increasing number
//     for (let k = 1; k <= i; k++) {
//           process.stdout.write(k + "")

//     }

//      // decreasing number

//      for (let k = i - 1; k >= 1; k--) {
//         process.stdout.write(k + "")

//      }

//      console.log()

// }

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for (let i = 5; i >= 1; i--) {
//     for (let j = 5; j >= i; j--) {
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }

// print a right aligned triangle

// let n = 4

// for (let i = 1; 4 <= 4; i++) {

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//          process.stdout.write(" ")
//     }
//     // starts
//     for (let k = 1; k <= i; k++) {
//          process.stdout.write("*")
//     }

//     console.log()
// }

// Hollow Square

// let n = 5

// for (let i = 1; i <= n ; i++) {

//     for (let j = 1; j <= n; j++) {

//         if (i == 1 || i == n || j == 1 || j == n) {
//             process.stdout.write("* ")

//         } else {
//             process.stdout.write("  ")
//         }
//     }
//     console.log()
// }

// Hollow Triangle

let n = 5

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if(j == 1 || j == i || i == n) {
             process.stdout.write("* ")

        } else {
             process.stdout.write("  ")
        }
    }
    console.log()
}












