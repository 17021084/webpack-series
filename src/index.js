import { wizard } from "./wizard";
import { barbarian } from "./barbarian";
import getClass from "./getClass";

console.log(" Ran from index.js");
// console.log(wizard);
// console.log(barbarian);

// getClass();

console.log("hot reload")

const obj = {
  a: "abc_abcsdasdas",
  c: "cde",
};
const newObj = { ...obj, d: "char" };
console.log(newObj);

obj?.a === "abc" ? console.log(obj?.a) : null;

console.log(123123123123)
alert("abc")