//Imediately Invoked Function Expressions (IIFE)

(function chai(){          //name iife
    console.log("anmol")      //iife helps to protect function from garbage produced due to global scope variable
})();

(function aurcode(sirname){
console.log(`${sirname}`)
})("pandey");

( (name)=> {                 //iife without name
    console.log(`${name}`)
})('IRONMAN')