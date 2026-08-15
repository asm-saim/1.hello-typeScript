"use strict";
//object destructuring:
const info = {
    fullName: "JK",
    age: 28,
};
const { fullName, age: currentAge } = info;
//array:
const points = [23, 56, 2, 3];
const [num1, , , num4] = points;
