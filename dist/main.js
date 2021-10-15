// define variables
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const checkBotton = document.querySelector('#check');
const againButton = document.querySelector('#again');
let highScore = 0;
let point = 20;
const inputGuess = document.querySelector('#input-guess');
max.innerHTML=20;
min.innerHTML = 1;
// const rand = Math.trunc((Math.random()*Number(max.innerHTML))+Number(min.innerHTML));
const rand = 2
checkBotton.addEventListener('click',checkGuess);
againButton.addEventListener('click',function(){
    point = 20;
    document.querySelector('body').style.background = '#333';
    document.querySelector('.message').innerHTML = 'start guessing ...';
    document.querySelector('.score').innerHTML = 20;
})


function checkGuess(){
    let guess = Number(inputGuess.value);
    if(guess === rand){
        if(point >= highScore){
            highScore = point;
        }
        document.querySelector('.highscore').innerHTML = highScore;
        document.querySelector('.question').innerHTML = rand;
        document.querySelector('.message').innerHTML = 'correct you win';
        winFunc();
    }else if(guess>rand){
        document.querySelector('.message').innerHTML = 'too high';
        point --;
        document.querySelector('.score').innerHTML = point;

    }else{
        document.querySelector('.message').innerHTML = 'too low';
        point--;
        document.querySelector('.score').innerHTML = point;
    }

}

function winFunc(){
    document.querySelector('body').style.background = 'green';
}