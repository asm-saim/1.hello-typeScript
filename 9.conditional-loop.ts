//conditional:
const brand: string = "samsung";
if (brand === "samsung") {
  console.log("This is samsung");
} else {
  console.log("This is not samsung");
}

//for loop:

let title = "NYC";
for (let i = 1; i <= 10; i++) {
  console.log(i,title);
}

//for of loop:
const numbers: number[] = [34, 67, 44, 77];

let total: number = 0;
for (let number of numbers) {
  total += number;
}
console.log(total);
