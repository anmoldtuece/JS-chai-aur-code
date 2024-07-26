// const coding = ["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values);     //foreach don't return value

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter((num)=>{
//     if(num>4){
//         return num
//     }
// })
// console.log(newnum);        //flter value return krta ha ye sirf decide karta ha konsa element rahega aur konsa hi rahega

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks = books.filter((bk)=>{
    if(bk.publish >= 1995 && bk.genre=='History')
        return bk;
})
console.log(userbooks);



