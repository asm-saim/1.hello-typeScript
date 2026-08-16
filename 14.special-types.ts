// 1. Union Type |
// A union type means a value can be one of several specified types.
// When you know exactly which types are allowed.

function info2(id: number | string) {
  return id;
}

console.log(info2(23));
console.log(info2("code"));

//unknown :I don't know the type. Check it before using it.
let newValue: unknown = "Sakil";

if (typeof newValue === "string") {
  console.log(newValue.toUpperCase());
}

//null: there is intentionally no value.
let profilePicture: string | null = null;

//undefined :A value has not been provided/assigned.
let name5: string | undefined;
console.log(name5);

//never: This can never successfully return/happen.
function errorMessage(person: string): never {
  throw new Error(person);
}

//any: Don't check this value's type.
//Why is any dangerous? - Because it removes TypeScript's type safety.

function typeRemoved(value9: any) {
  return value9;
}
typeRemoved(23);
typeRemoved("name");
typeRemoved(true);
typeRemoved(true);
