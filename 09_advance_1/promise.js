const promise1 = new Promise(function (resolve,reject){
    //Do async task
    //DB calls cryptography, network
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve();
        
    },1000)
})

promise1.then(function(){
    console.log('promise consumed');
    
})

//promise 2
new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('Async task2 is Complete');
        resolve();
        
    },1000)
}).then(function(){
    console.log('promise consumed');
    
})


//promise 3
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"anmolop@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


//promise 4
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh",password:"123"});
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promise4.
then(function(user){
    console.log(user);
    return user.username;
}).
then((username) => {
    console.log(username);
}).
catch(function(error){
    console.log(error);
}).
finally(()=> console.log("The Promise ia either resolved or rejected"))


//5
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = true;
        if(!error){
            resolve({username: "javascript", password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumepromise5(){
    try{
        const response=await promise5;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumepromise5();

// async function getalluser() {
//    try{
//    const response=await fetch('https://api.github.com/users/anmoldtuece')
//    const data=await response.json();
//    console.log(data);
//    }catch(error){
//    console.log("E:",error);
//    }
   
// }
// getalluser();

fetch('https://api.github.com/users/anmoldtuece')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
