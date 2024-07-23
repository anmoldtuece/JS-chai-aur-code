// let a = 10
// const b = 20
// // var c = 30
// let c=800
// if(true){
// let a = 10
// const b = 20
// let c = 30          // should not use because it can be used out of scope
// }

// // console.log(a)
// // console.log(b)
// console.log(c)

function one(){
    const username = "anmol"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

//************************************************************************ */
console.log(addone(5))
function addone(num){
    return num+1;
}
// console.log(addone(5))

// console.log(addtwo(9))         is tarike wale function ma pahle access nhi kar sakte like prev one
const addtwo = function(num){
    return num+2
}
console.log(addtwo(9))
