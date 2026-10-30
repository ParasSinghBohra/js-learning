 const name = "Paras"
const repoCount = 1

//  console.log(name + repoCount+ "values");
console.log(`Hii my name is ${name} and my repo count is ${repoCount}`);   // String Interpolation

 const gameName = new String("Paras-Singh-Bohra")
  
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,10)
console.log(anotherString);


const newStringOne = " Paras "
console.log(newStringOne);
console.log(newStringOne.trim());


const url= "paras.com%20/parassbohra" 
console.log(url);
console.log(url.replace('%20','-'));


console.log(url.includes("paras"));
console.log(url.includes("PSb"));


console.log(gameName.split('-'));
