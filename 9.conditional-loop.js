"use strict";
//conditional:
const brand = "samsung";
if (brand === "samsung") {
    console.log("This is samsung");
}
else {
    console.log("This is not samsung");
}
//for loop:
let title = "NYC";
for (let i = 1; i <= 10; i++) {
    console.log(i, title);
}
//for of loop:
const numbers = [34, 67, 44, 77];
let total = 0;
for (let number of numbers) {
    total += number;
}
console.log(total);
