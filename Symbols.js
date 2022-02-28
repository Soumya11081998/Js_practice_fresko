// Defining symbol 
let email = Symbol(); 
// Defining object "user"
let user = {      
    name:"praveen", 
    age : 30, 
//Symbol as key in array 
    [email] : "praveen@gmail.com" 
 };  
//Symbols are visible if accessed directly:

console.log(user[email]);  
// praveen@gmail.com

//Object.getOwnPropertySymbols() returns an array of symbol-based keys
console.log(Object.getOwnPropertySymbols(user));  

//Reflect.ownKeys() will return an array of all keys & symbols.
console.log(Reflect.ownKeys(user)); 


let symbol1 = Symbol("Symbol_1st");
let symbol2 = Symbol("Symbol_1st");
console.log(symbol1 === symbol2);
console.log(symbol1 == symbol2);
console.log(symbol1 === symbol1);
console.log(typeof (symbol1));

//Hands-On
let Employee = {      
    name : "rajesh",
    phone : "9800000000",
    [Symbol("email")] : "rajesh@gmail.com"
};

let allKeys = Reflect.ownKeys(Employee);
let privateKeys = Object.getOwnPropertySymbols(Employee) ;
let publicKeys = Object.keys(Employee);
//module.exports = {Employee, allKeys, privateKeys, publicKeys}
console.log({ Employee, allKeys, privateKeys, publicKeys });