//sigleton
//object literals
//Object.create
const mySym = Symbol("key1")        //imp

const juser = {
    name:"anmol",
    "full name": "anmol pandey",
    [mySym]:"mykey1",              //agr symbol ki tarah use karna ha
    age: 20,
    location: "delhi",
    email: "anmol@gmail.com",
    isLoggedIn: false,
    LastLogininDays: ["mon","tue"]
}         //object declaation

console.log(juser.email)
console.log(juser["email"])
console.log(juser["full name"])
console.log(juser[mySym])
console.log(typeof juser[mySym])

juser.email="ap23@gmail.com";
//Object.freeze(juser)
juser.age=23
console.log(juser)

juser.greeting = function(){
    console.log("hello world")
}
juser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(juser.greeting())
console.log(juser.greetingtwo())