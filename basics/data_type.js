"use strict"; //treat all js code as newer version
// datatypes-
// 1.primitive---
// Number
// boolean-true/false
// String
// symbol--unique

// undefined-when we declare a variable but not assign any value

// null-we give it to show no value, it is object,has 0 value


// typeof --give type(null-object,undefined-unndefined,function-function)

// NaN-not a number,occur when we convert string or other datatype to number


// 2.reference(non primitive)
// Array,objects,function



// let name="Ayushi"
// console.log(typeof null)

// coneverting data type into num
// "33"--33
// "33Abc"--NaN
// true--1
let no="123"
let rollno=Number(no)
console.log(typeof rollno)
// coneverting data type into boolean
// 1--true
// "abs"--true
// ""--false

let isLogged="1"
let bool=Boolean(no)
console.log(bool)

// they may seem same, but actually they are different
// const id=Symbol("123")
// const another_id=Symbol("123")
// console.log(id==another_id)

// typescript is stricter version of js devloped by microsoft--ex in typescript,conversion of data type of variable which is once declared  is not allowed