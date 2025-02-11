const numbers = {
    username:"Akshay",
    price: "9999",

    welcomeMessage: function(){
        // console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
    }
}
// numbers.welcomeMessage()
// numbers.username="aayush"
// numbers.welcomeMessage()
// console.log(this);
// function tea (){
//     let username="aayush"
//     console.log(this);
    
// }
// tea()
const tea = () => { // imp case
    let username = "aayush"
    console.log(this);
    
}
// username()
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
