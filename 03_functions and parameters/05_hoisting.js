function one(){
    const username = "Aayush"
    function two() {
        const website = "aayush.org"
        console.log(username);
        
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const aayush = "pandey"
    if(aayush=="pandey"){
        const website = "youtube"
        // console.log(aayush+ website);
        
    }
    // console.log(website);
    
}
// console.log(aayush);
// console.log(addone(5))
function addone(num){
    return num + 1
}
// console.log(addTwo(5)) // here comes the hoisting concept
const addTwo = function (num) {
    return num + 2
}
// var c = 300
if (true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    
    // c= 30

}
console.log(a);
console.log(b);
// console.log(c);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}