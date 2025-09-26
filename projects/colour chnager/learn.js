const button=document.querySelectorAll('.button')
const body=document.querySelector('body')
button.forEach(function (button){
console.log(button)
// addEventlisterner-mean notice the event here we choosed when we click,now after clicking the function is called
button.addEventListener('click',function(e){
    console.log(e);

    console.log(e.target);
    if(e.target.id=='grey'){
        // body.style.backgroundImage="url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg')"
        body.style.backgroundColor = e.target.id
          
    }
    if(e.target.id=='white'){
           body.style.backgroundImage = "";
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
           body.style.backgroundImage = "";
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
           body.style.backgroundImage = "";
        body.style.backgroundColor=e.target.id
    }
})
})
