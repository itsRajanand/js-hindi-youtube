const accountId = 144553
let accountEmail = "raj5134@gmail.com"
var accountPassword = "928392"
accountCity = "Patna"
let accountState;

// accountId = 2  // not allowed

accountEmail = "raja5134@gmail.com"
accountPassword = "92839"
accountCity = "jaipur"


console.log(accountId);

/* 
 Prefer not to use var because of issue in block
 scope and funtional scope
*/


console.table([accountId, accountEmail, accountPassword ,accountCity, accountState]);