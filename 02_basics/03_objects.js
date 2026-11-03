//singleto 
//objext.create

//object literals 
const mySym = Symbol("Key1")
const Jsuser =  {
    name:"Paras",
    "Full name" : "Paras Singh Bohra",
    [mySym]: "key1",    // square brackets for defining symbols
    age: 23,
    email: "paras@gmail.com",
    LoggedIn:false,
    lastloggedinDays: ["Monday","Saturday"]   
}

// console.log(Jsuser.email);
// console.log(Jsuser["age"]);
// console.log(Jsuser["Full name"]);
// // console.log(typeof mySym);
// console.log(Jsuser[mySym]);


Jsuser.email = "paras1@veltrionixx.com"
// Object.freeze(Jsuser)

Jsuser.email = "paras1@gami.com"
console.log(Jsuser);
Jsuser.greeting = function(){
     console.log("Hello Js USer");
}
Jsuser.greetingTwo = function(){
     console.log(`Hello Js USer,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

