const user = {
    username: "ayush",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log();
// function one() {
//     let username = "ayush"
//     console.log(this.username);
    
// }
// one()

// const tea = function () {
//     let username = "aayush"
//     console.log(this.username);
    
// }

// const tea = () => {
//     let username = "aayush"
//     console.log(this);
    
// }
// tea()

// const addTwo = (num1,num2) => num1 + num2
// const addTwo=(num1,num2) => (num1+num2)
const addTwo=(num1,num2) => ({username:"aayush"})

console.log(addTwo(3,4));

const myArray = [2,5,3,7,8]

// myArray.forEach()