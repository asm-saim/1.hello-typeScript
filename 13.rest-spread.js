"use strict";
//rest:
const data = {
    name1: "KP",
    id: 200102,
    age: 31,
    location: "UK",
    status: "active",
};
const { name1, ...restData } = data;
//for array
const numbers2 = [23, 55, 3, 2, 22, 44];
const [value1, ...remaining] = numbers2;
//spread:
const nums1 = [12, 344, 32];
const nums2 = [11, 14, 43];
const nums3 = [22, 24, 22];
const all = [...nums1, ...nums2, ...nums3];
