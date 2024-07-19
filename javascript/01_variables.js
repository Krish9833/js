const accountID = 144553
let accountEmail = "hello@gmail.com"
var accountPassword = "6615"
accountCity = "Jaunpur"
// let & var are used to declare variables
// const means it cannot be changed later ,value is intentionally locked.
// accountID = 3 .....[this is not allowed beeacuse the value is intentionally locked.]
accountEmail = "pepe@gmail.com"
accountPassword = "5578"
accountCity = "mmumbai"
let accountstate ;


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

// console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountstate])