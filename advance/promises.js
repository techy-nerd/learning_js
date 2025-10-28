// promise is an object
const promiseOne=new Promise(function (resolve,reject){
    // do an async task
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
    
})
// II
// shorter way---------
new Promise(function (resolve,reject){
    // do an async task
    setTimeout(function(){
        console.log('async task 2 is complete')
        resolve()
    },1000)
}).then(function(){
    console.log('promise consumed');
    
})
// III

const promiseThree=new Promise(function (resolve,reject){
    // do an async task
    setTimeout(function(){
        // resolve({username:"Ayushi",email:"ayushi56@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);   
    
})
// IV
const promiseFour=new Promise(function (resolve,reject){
    // do an async task
    setTimeout(function(){
        let error=false
        if((!error)){
            resolve({username:"Ayushi",email:"ayushi56@gmail.com"})
        }
        else{
            reject('ERROR')
        }
},1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log('the promise has been resolved'))

// V

const promiseFive=new Promise(function (resolve,reject){
    // do an async task
    setTimeout(function(){
        let error=false
        if((!error)){
            resolve({username:"js",email:"js@gmail.com"})
        }
        else{
            reject('ERROR,js went wrong')
        }
},1000)
})
// new way of doing
async function consumepromiseFive( ){
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
     console.log(error);
        
    }
    
}
consumepromiseFive()

// via fetch+++++++++++++++++
// method1
// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('error')
//     }
// }
// getAllUsers()

// method2-----------
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error)
})

