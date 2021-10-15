// another way to write this app {cleaner and better way}

// defining variables
const check = document.querySelector('#check');
const question = document.querySelector('.question');
const again = document.querySelector('#again');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc((Math.random()*20)+1);
// events
check.addEventListener('click',checkGuess);
again.addEventListener('click',againGame);
// funtions

// a function to show message
const showMessage = (message)=>{
    document.querySelector('.message').innerHTML = message;
}
// to preduce the game
function checkGuess(){
const num = Number(document.querySelector('#input-guess').value);
if (!num){
showMessage('No Numbewr🔴');
}else{
if(num === secretNumber){
    showMessage('you Win , Corect✅');
    question.innerHTML = secretNumber;
    document.querySelector('body').style.background = '#60fe21';
    if(highScore<score){
        highScore = score;
        document.querySelector('.highscore').innerHTML = highScore;
    }
}else{
    score--;
    document.querySelector('.score').innerHTML = score;
    num>secretNumber?showMessage('too high ⬆'):showMessage('too low ⬇');
}
}
}
// again function
function againGame(){
    document.querySelector('body').style.background = '#333';
    score = 20;
    document.querySelector('.score').innerHTML = 20;
    question.innerHTML = '?';
    showMessage('start Guessing ...');
    secretNumber = Math.trunc((Math.random()*20)+1);
}