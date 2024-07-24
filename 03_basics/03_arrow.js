const user={
    username:"anmol",
    price:100,

    welcomemessage:function(){
        console.log((`${this.username} welcome to website`));
        console.log(this);
    }

}
// user.welcomemessage()
// user.username="ayush"
// user.welcomemessage()

// console.log(this)

// function chai(){
//     let username = "anmol"
//     console.log(this.username) //cant be done
// }
// chai()

// const chai = function(){
//     let username = "anmol"
//     console.log(this.username)
// }
// chai()

// const chai = ()=>{
//     let username = "anmol"
//     console.log(this)
// }
// chai()

// const addtwo=(num1,num2) => num1+num2; //{} likha to return likhna hi padega () ma likha to return likhne jaruri nhi ha
// const addtwo=(num1,num2) => (num1+num2)

const addtwo=(num1,num2) => ({username:"anmol"}) //obj ko parenthesis mawrap krna hi padega
console.log(addtwo(2,3))

const myarr=[2,3,4,5,7]

// myarr.forEach(()=>())