// function func1(){
//     return 2
// }
// function func2(){
//     return 4
// }
// let a =(func1(),func2())
// console.log(a);
// The output is 4 because of how the comma operator (,) works in JavaScript.
// The comma operator evaluates all expressions from left to right, but returns only the value of the last expression.

// const arr = ["one","two","three"];
// const str="Hello";

// const res=arr.includes("on")
// const anotherVar = arr.includes("onetwo")
// const newVar=str.includes("ll")
// console.log(res);
// console.log(anotherVar);
// console.log(newVar);
// Array.includes() → checks for exact elements, String.includes() → checks for substrings.
// console.log(true==""); // false, == (loose equality) allows coercion → can be tricky.
// console.log('1'==1); // true, == does type conversion before comparing.
// console.log(true === "");  // false , === (strict equality) compares without conversion.
// console.log('1' === 1);    // false

let a= 10;
let b= new Number(10);
let c = 10;
console.log(a===b);
