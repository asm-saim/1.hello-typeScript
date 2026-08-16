"use strict";
// 1. Union Type |
// A union type means a value can be one of several specified types.
// When you know exactly which types are allowed.
function info2(id) {
    return id;
}
console.log(info2(23));
console.log(info2("code"));
