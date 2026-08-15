//object destructuring:
const info: { fullName: string; age: number } = {
  fullName: "JK",
  age: 28,
};
const { fullName, age: currentAge } = info;

//array:
const points: number[] = [23, 56, 2, 3];

const [num1, , , num4] = points;
