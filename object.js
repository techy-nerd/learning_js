// declare singleton
const myobj1= new Object()
// object-has key,value pair
// non singleton
const student={
    name:"ayushi",
    age:18,
    location:'delhi'
}
// access ele
console.log(student.age);
console.log(student["age"]);

// use symbol in object-interview q-done via sq bracket
// declare symbol
const mySym=Symbol("mykey")
const myobj={name:'sakshi',
    [mySym]:"value"
}
// access zsymbol
console.log(myobj[mySym])
console.log(myobj['name'])


// changes and freeze value in object
myobj.name="ayushi"
console.log(myobj);
// freeze value in object-no chanve done now to the object++++++++++++++++++++++++++++++
Object.freeze(myobj)
myobj.name="arya"
console.log(myobj);


// function++++++++++++ 
const newObj={
    name:"ayushi"
}
newObj.greet=function(){
    console.log(`hello js user,${this.name}`)
}
newObj.greet();

// another way
const otherObj={
    name:"ayushi",
    greet:function(){
        console.log('hello')
    }
}
otherObj.greet();


// combine object-by assign and spread
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };



const merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); 
// this modifies the obj1
// const merged2 = Object.assign( obj1, obj2);
// console.log(merged2); 



// by spread
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { a: 1, b: 3, c: 4 }


// access keys and values of object
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// check if key exists++++++++++
console.log(obj1.hasOwnProperty('a'));

// destructing of object by curly braces++++++++++
const newObj1={name:'js course',
    instructor:'hitesh',
    price:'099'
}
const {instructor}=newObj1
// const {instructor:teacher}=newObj1
console.log(instructor)
// console.log(teacher)