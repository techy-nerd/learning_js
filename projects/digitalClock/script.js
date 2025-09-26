const clock=document.getElementById('clock')

// set interval-event methd to which you need to tell interval
setInterval(function(){
    let date=new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString()
},1000)