const coding = ["js","cpp","python","java","ruby"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach(greet = ()=>{
//     console.log(item);
    
// } )
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
} )

const mycode =[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"jv"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

mycode.forEach((item) => {

    console.log(item.languageName);
    
})