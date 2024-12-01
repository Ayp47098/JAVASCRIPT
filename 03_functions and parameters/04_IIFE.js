// Immediately Invoked Function Expressions(IIFE)

(function tea(){
    //named IIFE
    console.log(`DB CONNECTED `);
    
})();

((name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('aayush')

