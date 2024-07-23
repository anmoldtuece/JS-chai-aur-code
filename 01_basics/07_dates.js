//dates

let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDat= new Date(2024, 6, 20, 8 ,9); //month is intialised starts from 0 
console.log(myCreatedDat.toLocaleString())

// let myCreatedDate= new Date("2024-07-20");
let myCreatedDate= new Date("07-20-2024");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myCreatedDate.getTime()/1000));