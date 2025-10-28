const descriptor=Object.getOwnPropertyDescriptor(Math,"PI" )
// we see that the value of pi is not writable thus we can't change  it
console.log(descriptor)

// defining our object-
const chai={
    name:'ginger',
    isAvailable:true,
    price:250
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
// change my own property
Object.defineProperty(chai,'name',{writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))