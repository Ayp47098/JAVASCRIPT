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

// JsUser.greeting = function(){
//     console.log("Hello JS user");
    
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
    
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object() // singleton object 
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Ayush",
            lastname: "Pandey"
        }
    }
}

// console.log(regularUser.fullname?.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // yaha par output me array aata hai aur boht useful hota hai baadme jaakr usspe loops chala skate aur bhi boht kuch
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.IsLoggedIn.HasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JAVASCRIPT",
    price:"999",
    courseInstructor:"ayush"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name":"ayush",
//     "coursename":"JAVASCRIPT",
//     "price":"444"
// }

[
    {},
    {},
    {}
]

