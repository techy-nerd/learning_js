let myDate = new Date()
// typeof Date is- object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

console.log(myDate.getDay())
console.log(myDate.getMonth()+1)

// declare your own date-month start from zero
// let createdDate=new Date(2023,0,23)
let createdDate=new Date(2023,0,23,2,3,2)
console.log(createdDate.toLocaleString())

// declare your own date-acc to specific format like yy/mm/dd or mm/dd/yy
let newDate=new Date("08-27-2005")
console.log(newDate.toLocaleString())

// customize the tolocalstring--it gives you your weekday for example--important
let yourDate = new Date()
console.log(yourDate.toLocaleString('default',{
    weekday:'long'
}))



//+++++ timestamps++++++++++++++++++++++++++
// gives off the exact time now in millisecond
let myStamp=Date.now()
// get time of your cretaed date
console.log(createdDate.getTime())
// convert time in millisecond to second by dividing by 1000+++interview q
console.log(Math.floor(Date.now()/1000))

