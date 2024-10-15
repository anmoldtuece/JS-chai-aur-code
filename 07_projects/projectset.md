# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/~/github.com/anmoldtuece/dom-project-chaiaurcode-wnnb3d?file=1-colorChanger/index.html:L36&initialPath=/1-colorChanger/index.html)

# Solution code

## Project 1

```Javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey';
        }
        if(e.target.id==='white'){
            body.style.backgroundColor='white';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow';
        }
    });
});
```
## Project 2

```Javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
## Project 3
```Javascript
const clock=document.getElementById('clock')

// let date=new Date();
// console.log(date.toLocaleString());

setInterval(function (){
    let date=new Date();
    clock.innerHTML=`${date.toLocaleTimeString()}`
},1000)
```
## Project 4
```Javascript

```