const marvel_heros=["thor","captain america","iron man"]
const dc=["batman","flash","superman"]

// marvel_heros.push(dc);
// console.log(marvel_heros)

// const all_heros=marvel_heros.concat(dc)
// console.log(all_heros)

// const all_new_heros = [...marvel_heros, ...dc]; //spread operator
// console.log(all_new_heros)

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("anmol"))
console.log(Array.from("anmol"))
console.log(Array.from({name:"anmol"}))  //intresting case

let score1=100
let score2=100
let score3=100

console.log(Array.of(score1,score2,score3));

//read all array properties especcially mention in it
