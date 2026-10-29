//Primitive Data types 
//Strings, Number , boolean, Symbols, null , undefined , Big Int

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 12345678088675629856743856n    





//Refrence Type(Non -Primitive Data types)

// Arrays , Objects , Functions

const fruit = ["Mango","Orange","Banana","Apple",]

let newObj= {
    name:"Paras",
    age:23,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof bigNumber);// returns BigInt
// console.log(typeof scoreValue);   // returns numbers
// console.log(typeof newObj);  // returns object
// console.log(typeof userEmail);  // returns undefined
// console.log(typeof fruit);  // returns Array
