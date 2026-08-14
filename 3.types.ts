//Primitive Datatypes in TS: SNBBUSN
// The main primitive types are:
// string
// number
// boolean
// bigint
// symbol
// undefined
// null

//string
let district: string = "Dhaka";
district = "Rajshahi";
// district = 404;

//number:
let students: number = 300;
let price: number = 23.6;
let value: number = -2;

//Boolean:
let isRaining: boolean = true;

//undefined:
let y: undefined;

//null:
let total: null = null;

console.log(district, students, price, value, isRaining);

//Inference:if we do not declare the type, TS automatically detects the type. Thats called inference.
let firstName = "David";
console.log(firstName);

//any: can use any type. But its not a good practice.
let totalValue: any = 23;
totalValue = "Not Found";
totalValue = false;
console.log(totalValue);
