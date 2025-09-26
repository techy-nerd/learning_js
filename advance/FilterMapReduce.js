const coding=['js','ruby','java','python']

// const values=coding.forEach((item)=>{console.log(item)})
// console.log(values)
// forEach does not return any value


const myNums=[1,2,3,4,5,5]
// const newNums=myNums.filter((item)=>item>4)

// you need to use return if you used curly brackets in filter
const newNums=myNums.filter((item)=> {return item>4})
console.log(newNums)

const ans=myNums.filter((item)=> item==3)
console.log(ans)

// +++++++++ MAP  +++++++++++++++++++++++++++++++++++++++++
const mynumbers=[1,2,3,4,5,6,7,8,9];
let newNumbers=mynumbers.map((num)=>num+10);
console.log(newNumbers);
// chaining 
 newNumbers=mynumbers.map((num)=>num+10).filter((num)=>num>15);
console.log(newNumbers);

// +++++++++  REDUCE  +++++++++++++++++++++++++++++++++++
const myNums2=[1,2,3,4,5];
const myTotal=myNums2.reduce((acc,currVal)=>acc+currVal,0);
console.log(myTotal);

const myObj=[{itemName:"pencil",
    price:1200
},{
    itemName:"rubber",
    price:10
}

]
const cartValue=myObj.reduce((acc,item)=>acc+item.price,0);
console.log(cartValue);
