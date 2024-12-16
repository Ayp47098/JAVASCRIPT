// reduce() used in shopping cart applications

const num =[1,2,3]
// const myTotal = num.reduce(function(acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc + currval
// },0)

const myTotal = num.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"app dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const price = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(price);
