// function isEvenOrOdd (num){
//     return num % 2 === 0;
// }
// const a=4;
// console.log(`${a} is ${isEvenOrOdd(a) ? "even":"odd"} number`);


// function largestNumber(a,b,c){
//     if (a > b && a>c){
//         console.log("a is greater");
        
//     }
//     else if (c>a && c>b){
//         console.log("c is greater");
        
//     }
//     else{
//         console.log("b is greater");
        
//     }
// }
// largestNumber(70,80,90)
// largestNumber(40,50,60)
// largestNumber(10,20,30)

// function largestNumber(a,b,c){
//     const max = Math.max(a,b,c)
//     if (max===a){
//         console.log("a is greater");
        
//     } else if (max===b){
//         console.log("b is greater");
        
//     } else{
//         console.log("c is greater");
        
//     }
// }
// largestNumber(1,2,3)
// largestNumber(2,4,6)

// function largestNumber(a,b,c){
//     const largest = a>b?(a>c?"a":"c"):(b>c?"b":"c")
//     console.log(`${largest} is greater`);
    
// }
//     const str="hello"
//     let reverseStr=""
//     for (let i=str.length-1;i>=0;i--){
//         reverseStr+=str[i]
        
//     }
// console.log(reverseStr);
// const str ="hello"
// const reversedStr=str.split('').reduce((rev,char)=>char +rev,'')
// console.log(reversedStr);

// const str= "aeioufkajhghghhg"
// let vowels=""
// let count = 0
// for (let  i= 0;  i< str.length; i++) {
//     if ("aeiou".includes(str[i])){
//         vowels+=str[i];
//         count++
        
//     }
    
// }
// console.log(`Vowels:${vowels}`);
// console.log(`Count:${count}`);
// function factorial(n){
//     if (n<0) return "not defined"
//     if (n===0||n===1) return "1"
//     let result = 1;
//     for (let i =2;i<=n;i++){
//         result*=i;
//     }
//     return result
// }

// console.log(`Factorial of 1: ${factorial(1)}`);
// console.log(`Factorial of 2: ${factorial(2)}`);
// console.log(`Factorial of 3: ${factorial(3)}`);