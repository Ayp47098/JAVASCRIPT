// two ways : singleton and constructors

// object literals 
// Object.create // constructor method

const mySym = Symbol("key1") // interview questions



const JsUser = {
    name:"AYUSH",
    "full name": "AYUSH PANDEY",
    [mySym]: "mykey1",
    age: 21,
    location:"Mumbai",
    email:"Ayushpandey9820@gmail.com",
    IsLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="ayush@microsoftservices.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
