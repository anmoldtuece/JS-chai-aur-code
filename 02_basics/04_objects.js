// // const tinderuser = new Object()  //ye ak singleton obj ha
// const tinderuser = {}  //ye ak non singlenton obj ha

// tinderuser.id="123acv"
// tinderuser.name="sammy"
// tinderuser.isLoggedIn=false

// // console.log(tinderuser)

// const regularuser={
//     email:"anmol@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"anmol",
//             lastname:"pandey"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.lastname)

// const obj1 = {1: "a",2: "b"}
// const obj2 = {3: "a",4: "b"}
// const obj4 = {5: "a",6: "b"}

// // const obj3 = {obj1 , obj2}
// // const obj3 = Object.assign({},obj1,obj2,obj4)  //{} nhi bhi kregoe to yhi ayega agr empty loge to empty jayega vrna pahle wale ma add hoga

// const obj3 ={...obj1, ...obj2,...obj4} //spread way best way
// console.log(obj3)

// const users = [
//     {
//         id:1,
//         email:"anmolpandey@gmail.com"
//     },
//     {
//         id:1,
//         email:"anmolpandey@gmail.com"
//     },
//     {
//         id:1,
//         email:"anmolpandey@gmail.com"
//     }
// ]

// users[1].email

// console.log(tinderuser)

// console.log(Object.keys(tinderuser));  //output data type is array

// console.log(Object.values(tinderuser));  

// console.log(Object.entries(tinderuser));  

// console.log(tinderuser.hasOwnProperty('isloogedIn'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor

const {courseinstructor}=course

console.log(courseinstructor)

// {              //jason api format
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]
