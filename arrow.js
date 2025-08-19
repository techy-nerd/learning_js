const user={
    username:'hitesh',
    rollno:12,
    welcome:function(){
        // we use this to access current context in object
        console.log(`${this.username},welcome to my code`);
        // console.log(this)
    }
}
user.welcome()
// user.username='ayushi'
// user.welcome()

// this in global  scope in nodejs refer to the empty string
// in dom , this refers to windows object
console.log(this);

// ++++++++ARROW FUNCTION+++++++++++
const chai=()=>{
    console.log(`hi,i am arrow function`)
}
chai()

// explict return-if we use curly braces we need to write  return
const add=(a,b)=>{
   return a+b}
console.log(add(1,2))

// implicit return--no need to write return
const addAnotherWay=(a,b)=>(a+b)
console.log(addAnotherWay(1,2))
// to pass object etc in arrow func use parenthesis
const arrowFunc=()=>({username:'ayushi'})
console.log(arrowFunc())

// Execution context happens in 2 ways
// 1.function ec 2.Memory ec


// 1:global execution
//  phase are of 2 type
// 2.memory context phase --variable,etc are collected
// 3.execution phase
