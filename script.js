'use strict'

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct number';
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);*/
let secretNumber=Math.trunc(Math.random()*20)+1;//find random number 
let score=20;
let highScore=0;

//document.querySelector('.number').textContent=secretNumber;//
//for creating function
document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess) {
        document.querySelector('.message').textContent='No answer!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent='Correct number';
        //for dispalying secret number only if it true with guess number
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    else if(guess !== secretNumber){
        if( score > 1){
        document.querySelector('.message').textContent=
        guess > secretNumber ? 'Number is too high 😜' : 'Number is too low';
        score--;
        document.querySelector('.score').textContent=score;
       }
       else{
        document.querySelector('.message').textContent='You lost the game😒';
        document.querySelector('.score').textContent=0;
    }
}
  /*  else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent='Number is too high😜';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game😒';
        }
    }
    else if(guess < secretNumber){
          if(score > 1){
              document.querySelector('.message').textContent='Number is too low';
              score--;
              document.querySelector('.score').textContent=score;
          }
          else{
              document.querySelector('.message').textContent='You lost the game😒';
              document.querySelector('.score').textContent=0;
          }
    }*/
});
document.querySelector('.again').addEventListener('click', function () {
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';

});