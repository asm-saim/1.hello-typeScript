//function syntax:

function sum(num1: number, num2: number): number {
  const total = num1 + num2;
  return total;
}
const result: number = sum(6, 4);
console.log(result);

//optional property and void(means noting):
function calculate(numbers: number[], value: number, name?: string): void {
  numbers.push(value);
  console.log(numbers);
}
let values = [34, 66, 33, 17, 45];
let value = 67;
calculate(values, value);
