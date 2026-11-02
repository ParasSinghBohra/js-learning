 // DATES

 let newDates = new Date()
//  console.log(typeof newDates);
//  console.log(newDates);
//  console.log(newDates.toDateString());
//  console.log(newDates.toISOString());
//  console.log(newDates.toJSON());
//  console.log(newDates.toLocaleDateString());
//  console.log(newDates.toString());
//  console.log(newDates.toLocaleTimeString());
//  console.log(newDates.toUTCString());
//  console.log(newDates.toString());
 

// let  myCreatedDate = new Date(2026 , 10 , 1)
// let  myCreatedDate = new Date(2026 , 10 , 1 , 5 ,3)
// let  myCreatedDate = new Date("2026-11-01") 
let  myCreatedDate = new Date("11-01-2026")     
// console.log(myCreatedDate.toLocaleString);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
// console.log(newDate.getHours());
// console.log(newDate.getTimezoneOffset());

newDate.toLocaleString('default',{ 
    weekday:"long"
})
