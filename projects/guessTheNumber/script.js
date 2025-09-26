// genrating the random number
let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')
let preGuess=[]
let numGuess=1
// condition used in games frequently
let playGame=true
// check if user is allowed or not
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('pls enter a valid number')
    }
    else if(guess<1){
        alert('pls enter a  number more than one')
    }
    else if(guess>100){
        alert('pls enter a  number less than 100')
    }
    else{
        preGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game over! Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage(`You guessed it right!`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low!`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high!`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} ,`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}
function endGame(){
    userInput.value=''
    // we always add disable in key value pair, ut as here their is not a pair you leave it empty

    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h1 id='newGame'>Start new game!</h1>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameBt=document.querySelector('#newGame')
    newGameBt.addEventListener('click',function(e){
        let randomNumber=parseInt(Math.random()*100+1)
        preGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true

    })
}
