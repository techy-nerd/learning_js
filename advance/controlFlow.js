// Switch statement-we add break because if case become true all case after gets executed except default
const bal=50
switch(bal){
    case 0:console.log('your acc is empty')
            break;
    case 50:console.log('not sufficient fund')
            break;

    case 100:console.log('you can do your shopping')
            break;
    default:console.log('other cases')
            
}

// +++++++++TRUTHY & FALSY VALUES+++++++++++
// falsy values are-> 0,-0,BigInt 0n,"",undefined,null,NaN--all these values are considered as falsey
const username=""
if(username){
    console.log('user has loggedIn');
}
else{
    console.log('user has not logged in');
    
}
// truthy value->'0','false'," ",[],{},function(){},etc


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log('the object is empty');
    
}

// nullish coalescing operator(??)-->The ?? operator returns the right-hand side value only if the left-hand side is null or undefined.
const val=null??10
console.log(val); 

const val1=20??10
console.log(val1); 


// terinary operator-consition?true:


// +++++++++high order loop++++++++++
// arr-for of loop
const arr=[1,2,3,4]
for(const num of arr){
    console.log(num);
    
}

// Map-for of loop
const map=new Map()
map.set(1,'ayushi')
map.set(2,'khushi')
map.set(3,'khushi')
// console.log(map)
for(const [key,val] of map){
    // console.log(key,'->',val);
    
}

// objects-do  not follow this for loop structure
//obj=for in loop
const myobj={
    name:'ayushi',
    rollno:11
}
for(const key in myobj){
    // console.log(key)
    // console.log(`${key} value is ${myobj[key]}`)
}

// +++for each loop+++++

const coding=['ruby','python','js']
coding.forEach(function (values){
    // console.log(values);
})

coding.forEach((item)=>{
    console.log(item);
    
})

// passing func inside forEach
const coding1 = ['ruby', 'python', 'js'];

function printMe(item) {
  console.log(item);
}
coding1.forEach(printMe);



const fruits = ["apple", "banana", "cherry"];
fruits.forEach((item,index)=>{
    console.log(`friuit at ${index} is ${item}`)
})

// +++for each on objects in arrayy+++++++
const people = [
  { name: "Ayushi", age: 21 },
  { name: "Riya", age: 22 },
  { name: "Kabir", age: 20 }
];
people.forEach((item)=>{
    if(item.age >20)
    console.log(`${item.name} is ${item.age} years old`)
    // console.log(`friuit at ${index} is ${item}`)
})
