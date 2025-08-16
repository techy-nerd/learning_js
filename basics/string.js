// to make use of more than two variable in the file
// can apply operation of string here only
const var1="helloo"
const var2="bye"
console.log(`krishna says ${var1} to me and ${var2} to you!`)

// new way of declaration
const gameName= new String("hello")
// operation
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('l'))

// substring opr-always run for positive value
const gamePlace =new String("muradpur-india")
const newString=gamePlace.substring(0,3)
console.log(newString);

// slice opr-slice(start, end) → returns empty if start > end.
const anotherString=gamePlace.slice(-8,12)
console.log(anotherString);

// trim-remove extra space
const goodString="   hello "
console.log(goodString.trim());

//  replace and includes
const url="ayushigarg233.comm"
console.log(url.replace('.comm','.com'));
console.log(url.includes('ayushi'));
console.log(url.split('.'));
