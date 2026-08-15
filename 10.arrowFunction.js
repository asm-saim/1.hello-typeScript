"use strict";
//arrow function:
const biggerName = (name1, name2) => {
    if (name1.length > name2.length) {
        return name1;
    }
    return name2;
};
const res = biggerName("Wasi", "JK");
console.log(res);
