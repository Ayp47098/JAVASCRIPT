//singleton
//object literals
//object.create
const mySym = Symbol("key1")
const JsUser = {
    name:"Ayush",
    "full name":"Ayush Pandey",
    [mySym]:"mykey1",
    age:18,
    location:"Mumbai",
    email:"ayushpandey00788@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "ayush@claude.com"
// Object.freeze(JsUser)
JsUser.email="ayush@gpt.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
    
// }
// console.log(JsUser.greeting);

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user,${this.name}`);
    
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser= new Object()
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"ayush",
            lastName:"pandey"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstName);

const object1= {1:"a",2:"b"}
const object2={3:"a",4:"b"}

// const object3 = {obj1,obj2}
// const obj3={...object1,...obj2}
// console.log(object3);

const users=[
    {
        email:"paa@gmail.com"
    },
    {
        email:"ayushpandey9969@gmail.com"
    },
    {
        email:"ahha@"
    }
]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'));

const courseName = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// courseName.courseInstructor
const {courseInstructor}=courseName
// console.log(courseInstructor);
//Create an object person with properties name, age, and city. Write a function to print "Name is 25 years old from City".
// const person ={
//     name:"Ayush",
//     age:21,
//     city:"Mumbai"
// }
// function toPrint (){
//     console.log(`${person.name} is ${person.age} old from ${person.city} `);
    
// }
// toPrint()

// Write a function that counts the number of keys in an object.
function countsKey(){
    const obj1={
        name:"ayush",
        experience:0,
        fullname:"Ayush Pandey"
    }
    console.log(Object.keys(obj1));
    console.log(Object.keys(obj1).length);
    
}
countsKey()
// Merge two objects:
const obj1={a:1,b:2}
const obj2={b:3,c:4}
const obj3= Object.assign({},obj1,obj2)
console.log(obj3);
