const mynums=[1,2,3]

// const mytotal=mynums.reduce(function (acc,curr){
//     console.log(`${acc} and ${curr}`);
//     return acc+curr;
// },0)
// console.log(mytotal);

const mytotal=mynums.reduce((acc,curr)=>{return acc+curr},0)
console.log(mytotal);

const shoppingkart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"cpp course",
        price:7000
    },
    {
        itemname:"python course",
        price:5000
    }
]

const pricetopay=shoppingkart.reduce((acc,item)=>{return acc+item.price},0)
console.log(pricetopay);