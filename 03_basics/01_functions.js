// function saymyname(){
//     console.log("anmol")
//     console.log("pandey")
// }

// saymyname();

// function add(number1 ,number2){
//     console.log(number1+number2)
// }
// add(2,"3")
// add(2,"a")
// add(2,null)

// function add(number1 ,number2){
//     let result = number1 + number2;
//     return result;
// }
// const result=add(3,5);
// console.log("Result is :",result)

function loginUsermessage(username){
    if(username === undefined){
        return
    }
    return `${username} just logged in`
}
console.log(loginUsermessage("anmol"))

function CalculateCartPrice(...num1){   //rest operator
    return num1;
}

// console.log(CalculateCartPrice(200,300,400))

const user={
    username:"anmol",
    price:99
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
console.log(handleobject(user))