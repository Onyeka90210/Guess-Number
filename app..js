'use strict'
let number = document.querySelector('.number');
const inpOfGuess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again')
let SG = document.querySelector('.SG')
let GO = document.querySelector('.GO')

let result = document.querySelector('.results')


// console.log(typeof Number(inpOfGuess.value));



function randomNumber(){
    return Math.ceil(Math.random() * 6)
}

let randomNumberGenerator = randomNumber()

console.log(randomNumberGenerator);


checkBtn.addEventListener('click',()=>{
    let body = document.body.style

    if(!inpOfGuess.value){
        result.innerText = 'INVALID!'
        SG.textContent = 'Input field must not be empty'
    
        
    }
    else if(Number(inpOfGuess.value) > 6 || Number(inpOfGuess.value) < 1){   result.innerText = 'INVALID!'
        SG.textContent = 'Must be between 1 and 6'
    }
    else if(Number(inpOfGuess.value) > randomNumberGenerator){
        // alert('u guessed higher');
        result.innerText = 'WRONG!'
        SG.textContent = 'You guessed higher'
        score.textContent --
        body.backgroundColor = 'blue'
        
    }else if(Number(inpOfGuess.value) < randomNumberGenerator){
        // alert('u guessed lower');
        result.innerText = 'WRONG!'
        SG.textContent = 'You guessed lower'
        score.textContent --
        body.backgroundColor = 'orange'
        
    }else if(Number(inpOfGuess.value) === randomNumberGenerator){
        result.innerText = 'CORRECT!'
        SG.textContent = 'You guessed correct'
        number.textContent = randomNumberGenerator
        // score.textContent --
        body.backgroundColor = 'Green'
        checkBtn.setAttribute('disabled','disabled')

    }
    if(score.textContent < 1){
        result.innerText = 'WRONG!'
        GO.innerText = 'GAMEOVER!'
        checkBtn.style.display = 'none'
        number.textContent = randomNumberGenerator



    }
    if(Number(inpOfGuess.value) === randomNumberGenerator){
        checkBtn.style.display = 'none'

    }

})
again.addEventListener('click', function(){ document.location.reload()})
