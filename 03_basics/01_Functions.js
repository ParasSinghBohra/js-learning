
function sayMyName(){
console.log("P");
console.log("A");
console.log("R");
console.log("A");
console.log("S");

}

// function addTwoNo(number1,number2){
//     console.log(number1+number2); 
// }
function addTwoNo(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNo(3,4)
// console.log("Result", result);

function LoginUserMessage(username="Guest"){ 
    if(!username){
        console.log("Enter your name ");
        return
    }
    return `${username} just logged in `
}
// console.log(LoginUserMessage("Paras"));
// console.log(LoginUserMessage("Paras"));


function calulateCartPrice(...num1){        //... is a rest operator hai which turns it into an array
     return num1
    }   
// console.log(calulateCartPrice(200,300,400));


const user= {
    username:"Paras",
    price : 199
}
function handleObject(anyobject){
       console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));