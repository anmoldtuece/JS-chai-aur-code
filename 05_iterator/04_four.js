const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const arr = [1,2,3,7,5];
// for (const key in arr) {
//     console.log(arr[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {  //map is not itterable
//     console.log();
// }