/**
 * TERNARY -> Three Parts
 *      ?   :
 * Condition ? do something when tru : do something when false
 */
// Normal
const age = 122;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("Jao baccha ghumay thako");
// }
// Simple Ternary
// age > 18 ? console.log("Vote dio") : console.log("Ghumay thako");

let price = 500;
const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// Semi-Advance Ternary

// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 100;
// }

// Ternary Method
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
console.log(price);
