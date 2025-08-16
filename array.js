// array-collection of multiple data types are of  not fixed size
// shallow copies created(i.e change done in the original copy(heap))

const myArr=[1,2,3,4,5,"true","hitesh"]
const myArr2= new Array(1,2,3,4)

console.log(myArr[0])
// methods
// 1-push-to push ele at last,
//  2-pop=pop the last ele
// 3-unshift-push ele to first position
// 4.shift-pop ele from first pos
// 5.includes-checkk if ele exits
// 6-indexof
// 7-join-take array and convert into single string and with a separator of your choice
// 8-slice and splice
myArr2.push(8)
console.log(myArr2)

myArr2.pop()
console.log(myArr2)

myArr2.unshift(0)
console.log(myArr2)

myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(2))
console.log(myArr2.indexOf(2))

// join opr
const newArray=myArr2.join('-')
console.log(newArray)


// slice → cuts out a portion of the array, returns it,but original array stays untouched.

// splice → modifies the original array directly ,can remove, replace, or insert elements.

let a = ["apple", "banana", "cherry", "date"];

console.log(a.slice(1, 3)); // ["banana", "cherry"]
console.log(a);             // ["apple", "banana", "cherry", "date"]

// splice → remove/replace, changes array
console.log(a.splice(1, 2, "blueberry")); // ["banana", "cherry"] removed
console.log(a);                           // ["apple", "blueberry", "date"]
 

// merging of two arrays+++++++++++++++
const fruits=['apple','banana','grapes']
const vegetable=['potato', 'tomato','cabbage','pumpkin']
// by concat
const newArray1=fruits.concat(vegetable)
// by spread
const otherArray=[...fruits,...vegetable]
console.log(otherArray)


// check if array+++++++++
console.log(Array.isArray("hello"))

// form an array from given++++++++ 
console.log(Array.from("hello"))
// return an empty array
console.log(Array.from({name:"hitesh"}))

// form an array from given data-of
let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1))