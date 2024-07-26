const mynums=[1,2,3,4,5,6,7,8,9,10]

// const mpp=mynums.map((val)=>{
//     return val+10
// })
// console.log(mpp);

const newnums = mynums
               .map((num)=>num*10)
               .map((num)=>num/10)
               .forEach((num)=>num+1)    //filter boolean return krta ha

console.log(newnums);               