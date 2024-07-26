const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (val) => {
// console.log(val);
// })

// function printme(item){
//     console.log(`${item}`);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
// console.log(item, index, arr);
// } )

const myCoding = [
    {
        langaugeName: "javascript",
        languageFileName: "js"
    },
    {
        langaugeName: "python",
        languageFileName: "py"
    },
    {
        langaugeName: "c++",
        languageFileName: "cpp"
    }

]

myCoding.forEach( (val) => {
console.log(`${val.langaugeName} and file is ${val.languageFileName}`);
})

