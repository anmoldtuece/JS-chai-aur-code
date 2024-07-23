const accountId=1234567
let accountEmail="anmolpandey23012004@gmail.com"
var accountPassword="12345"
accountCity="DELHI"   //is tarah se bhi declare kr sakte ha practice ha but not good practice
let accountState;  //agr value assigned nhi kiya to undefined rhegi value 

// accountId=23455
accountEmail=7.09643
accountPassword="34567"
accountCity="Bihar"

console.log(accountId);

/*
prefer not to use var because of issue
in block scope and functional scope
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])