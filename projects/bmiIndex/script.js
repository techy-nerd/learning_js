// submit type event
const form=document.querySelector('form')
// stopping form to send it's default value
form.addEventListener('submit',function(e){
    e.preventDefault()
    // we used parseInt because by default we take the value in the string ,so we are converting it to the int
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===' '|| height<0||isNaN(height)){
        results.innerHTML='please provide a valid height'
    }
    else if(weight===' '|| weight<0||isNaN(weight)){
        results.innerHTML='please provide a valid weight'
    }
    else{
       const bmi=(weight/((height*height)/10000)).toFixed(2)
      message=`<span>Your bmi is:${bmi} <br></span>`
       if(bmi<18.6){
         message+=`You are underweight`
       }
       else if(bmi>18.6 && bmi<24.9){
         message+=`You are healthy!`
       }
       else{
        message+=`You are overweight!`
       }
       results.innerHTML=message
    }

})