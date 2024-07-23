const name = "anmol"
const repocount= 22

console.log(name + repocount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('anmo-l-l');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString =  gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   anmol   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-')) //replace 20

console.log(url.includes('hitesh')); //return boolean

console.log(gameName.split('-')) //split on the basis of something

//string ke sare function ko practice krna ha mdn ki help se