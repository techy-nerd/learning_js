// declare
function sayMyName(){
    console.log("ayushi")
}
sayMyName()

// we don't give data type to parameter
function addTwo(a,b=10){
    // if(a===undefined || b==undefined)
    if(!a|| !b)
        {
        console.log('please enter the value')
        return
    }
    return a+b
}
// argument
const sum=addTwo(2)
console.log(sum)
// if no parameter passed, it shows unndefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// no of parametr unknown-by rest which is similar to rest
function myFunctionn(...a){
 return a
}
console.log(myFunctionn(100,200,300));

function myFunctionn1(val1,val2,...a){
 return val1+val2
}
console.log(myFunctionn1(100,200,300));

// function handle object++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user={
    username:'ayushi',
    rollno:12
}

function handleObject(anyObject){
    console.log(`the username is ${anyObject.username} and roll no is ${anyObject.rollno}`);
    
}
handleObject(user)
handleObject({
    username:'khushi',
    rollno:24

})

// ++++++++++function handling array+++++++++++++++++++++++++++++++++++++++++++++
const arr=[12,3,3,2,2]
function returnSecondVal(myArray){
    return myArray[1]
}
console.log(returnSecondVal(arr))
console.log(returnSecondVal([1,2,2,3,3]))