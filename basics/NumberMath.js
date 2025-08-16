// ++++NUMBER+++++++++
// way of declaring no is by default by js and one  by ourseolf
const score=100

// another way-
const balance =new Number(100)

console.log(balance.toString());
// fixed-tell the no point you want value upto which is usually two
console.log(balance.toFixed(2));

const value=123.896798
console.log(value.toPrecision(4));
// to local string is used to write commas to number
const hundreds=108778677
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ++++MATHS+++++++++
// return positive
console.log(Math.abs(-4));
console.log(Math.round(4.3));
// choose top value
console.log(Math.ceil(4.2));
// chosose bottom value
console.log(Math.floor(4.2));
console.log(Math.sqrt(4.2));
console.log(Math.pow(4,2));
console.log(Math.max(2,1,5,6,3));

// random-generate random no b/w 0 and 1
console.log(Math.random());
// formula to genrate values b/w two ranges i.e max and min
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
