let score = "33abc" // true , unndefined ,null dalke score ma ak bar dekho to get clarity and revision

console.log(typeof score);
console.log(typeof (score)); 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"    => 33
//"33abc" => NaN
//true    => 1   ; false => 0

let IsLoggedIn = 1;

let booleanIsLoggedIn = Boolean (IsLoggedIn);

console.log(booleanIsLoggedIn);

//      1 => true ; 0 => false
//     "" => false
//"anmol" => true

let someNumber =33
let  stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// //************************OPERATION******************************

let value = 4
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1= "hello"
let str2= "anmol"

let str3=str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 1 + 2);
console.log(1 + 2 + "2");

/* string pahle ha to pura string treat kiya
 jayega agr last ma string ha to sirf last wala string treat kiya jayega*/

 let gameCounter=100
 gameCounter++
 console.log(gameCounter);
 ++gameCounter
 console.log(gameCounter);