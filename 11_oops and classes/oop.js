const users = {
    username:"aayush",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        
    }
}
console.log(users.username);
console.log(users.getUserDetails);
