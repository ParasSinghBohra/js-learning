const accountId = 1444553
let accountEmail = "paras@gamil.com"
var accountPassword = "12345"
accounctCity ="Uttrakhand"
let accounctState;

//accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "152124"
accounctCity = "M.P"
console.log(accountId);


/*

Prefer not to use var
bescause of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accounctCity,accounctState])
 