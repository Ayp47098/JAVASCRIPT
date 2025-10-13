// myFun()

// var myFun = function(){
//     console.log("First");
    
// }
// myFun()

// function myFun(){
//     console.log("second");
    
// }
// myFun()

// variable = 10;

// (() => {
//     foo = 100;
//     console.log(variable);
//     var foo = 100;
//     variable = 20;
//     console.log(variable);
// })(); //IIFE

// console.log(foo);
// console.log(variable);

// var variable = 30;

// for (var i =0; i <10;i++){
//     setTimeout(() => console.log(i),0);
    
// }

var fullname = "Ayush Pandey"

var obj ={
    prop:{
    fullname:"Inside Prop",
    getFullName: function(){
        return this.fullname
    },
},
getFullName: function () {
    return this.fullname;
},
getFullNameV2: () => this.fullname,
getFullNameV3: (function(){
    return this.fullname;
})(),
};
console.log(obj.);



