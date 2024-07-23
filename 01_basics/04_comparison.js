console.log(2 > 1);        //same data tyoe ma koi dikkat nhi ha
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); //javascript khud hi data conversion krti ha
                      //lakin yhi drawback ha isliye typescrpt krte ha
                      
console.log("02" > 1);

console.log(null > 0);     //null ko kabhi zero ma convert krta ha kabhi null ma ye dikkat ah
console.log(null == 0);    //isliye is tarike ke conversion avoid hi karna chahiye
console.log(null >= 0); 

                           //java script ma less than,grter than aur equality alag tarike se kam krte ha 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

// === strict equality operator used for checking value as well as data type
console.log("2" === 2);