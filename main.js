const secretNumber = document.querySelector('.secret_number');
const message = document.querySelector('.game_result');


let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
message.textContent = 'Start guessing...';

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.input').value);

    // When there is no input
    if (!guess) {
        message.textContent = '⛔ No number!';
    } 

    // When Player Wins the game
    else if (guess === randomNumber) {
        message.textContent = '🏆 Correct number!';
        secretNumber.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        secretNumber.style.width = '20rem';
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;

        // When the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = '😞 You loose!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } 
});

// Restarts the game
document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    secretNumber.textContent = '?';
    message.textContent = 'Start guessing...';
    secretNumber.style.width = '10rem';
    document.querySelector('.input').value = "";
});