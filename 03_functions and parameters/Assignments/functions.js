// function addTwonumbers(num1,num2){
//     console.log(num1+num2);
    
// }
// function addTwonumbers(num1,num2){
    // let result = num1+num2
    // console.log("Ayush");
    // if (!username===undefined){
        // console.log("Please enter a username");
//         return 
//     }
//     return num1 + num2
    
    
// }
// // const result= addTwonumbers(3,4)
// console.log("Result: ",result);

// function logInUserMessage(username){
//     return `${username} just logged in`
// }
// console.log( logInUserMessage("ayush"));
function calculateCartPrice(val1,val2,val3,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000,4000));
const user={
    username:"ayush",
    price:199
}
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// handleObject(user)

// function fibonacci (n){
//     let a=0,b=1;
//     for (let i=0;i<n;i++){
//         console.log(a);
//         let next = a+b;
//         a=b;
//         b=next;
        
//     }
// }
// fibonacci(10)
// function fibonacci(n){
//     let a= 0,b=1
//     for (let i=0;i<n;i++){
//         console.log(a);
//         let next = a+b
//         a=b
//         b=next
//     }

// }
// fibonacci(10)
function fib(n){
    if (n<=1) return n;
    return fib(n-1)+fib(n-2)
}
function printFib(n){
    for (let i=0;i<n;i++){
        console.log(fib(i));
        
    }
}
printFib(10)
function primeNumber(num1,num2){
    let num1=2
    let num2=4
    if (num1/num1){
        console.log("it is a prime number");
        
    }
}