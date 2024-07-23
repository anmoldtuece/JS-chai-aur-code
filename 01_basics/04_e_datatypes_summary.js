// 1. Primitive 

// 7 Types : String, Number, Booleaan, Null, Undefined, Symbol, BigInt

//java scipt is dynamically typed language

const score = false;
const score1 = 100.5;

const isLoggedIn=true;
let userEmail;
let man= null;

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  //false ayega symbol ki wajah se

const bigNumber = 34566765444444n

//2. Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["ironman", "spiderman", "thor"]; //arrays
heros.push("anmol")
heros[0]="ayush"

let myobj = {
    name: "anmol",                             //objectj
    age: 20,
}
const a=myobj;
console.log(a.age)
const myfunction = function(){
    console.log("Anmol");                      //function
}

console.log(myobj.age) //to identify type

//*******************************************************************************

// stack(primitive) & heap (non-primitive)

let myYoutubename = "anmolpandey"
let anothername= myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email:"user@goggle.com",
    upi:"user@ybl"
}
let user2 = user1;
user2.email="anmolgoggle@gmail.com";
console.log(user1.email)