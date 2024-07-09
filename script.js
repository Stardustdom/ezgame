'use strict';

/*console.log(document.querySelector('.message').textContent); //DOM selection
document.querySelector('.message').textContent = '🎉Correct Nummber!';
console.log(document.querySelector('.message').textContent); //DOM selection
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').value = 20;
let score = Number(document.querySelector('.score').value);
document.querySelector('.highscore').value = 0;
let highscore = Number(document.querySelector('.highscore').value);

//click button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when guess is not a given
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Nummber!';
  }

  //when guess is correct
  else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct Nummber!';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //when guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
