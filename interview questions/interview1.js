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

// let a= 10;
// let b= new Number(10);
// let c = 10;
// console.log(a===b);
// let a = {name:'Adarsh'}
// let z= {...a}
// z.name="Adil"
// console.log(a.name); //shallow copy and deep copy 

// console.log(+true);
// console.log(!"xyz");

// function curryFunction(a){
//     return function(b){
//         const mult= a*b
//         return function(c){
//             return res=mult*c
//         }
//     }
// }
// console.log(curryFunction(2)(3)(4));

// const str1 = "Hello"
// const str2 = "World 1234"

// function mergeTwoString(){
//     let res = '';
//     let m =0 ;
//     for (let i=0;i<str1.length;i++){
//         res.push()
//     }
// }
// console.log(mergeTwoString);

// Write a program to reverse a string without using built-in functions.
// function reverseStr(str){
//     let reverseStr = ""
//     for (let i=str.length -1;i>=0;i--){
//         reverseStr += str[i]

//     }
//     return reverseStr
// }
// const originalString="hello"
// const reversed = reverseStr(originalString)
// console.log(reversed);

// function isPrime(n){
//     if (n<=1){
//         return false;
//     }
//     for (let i=2;i<=Math.sqrt(n);i++){
//         if (n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(17));
// console.log(isPrime(3));

// Finding Factorial with Recursion in JavaScript 💻
// function Factorial(n){
//     if(n===0){
//         return 1;
//     } 
//     else{
//         return n*Factorial(n-1)
//     }
// }
// const number = 5
// console.log(`The Factorial of ${number} is ${Factorial(number)}`);
function reverseString(){
    let str =''
    for(i=0;i<=n;i++){
        str= 
    }
}