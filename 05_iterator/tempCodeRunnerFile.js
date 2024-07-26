
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

shoppingkart.reduce((acc,price)=>{return acc+price},0)
console.log(shoppingkart);