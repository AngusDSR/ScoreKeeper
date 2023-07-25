// Selecting the play to score
const playToSelectionDiv = document.getElementById('dropdown-container-playTo');
const playToSelector = document.getElementById('playToSelector');

// Scoring
const playerOneScoreSpan = document.getElementById('playerOneScore');
const playerTwoScoreSpan = document.getElementById('playerTwoScore');
const playerButtons = document.querySelectorAll('.playerButtons');
const resetButton = document.getElementById('reset-button');
let playerOneScore = 0;
let playerTwoScore = 0;
let playToScore = 0;

// Winner's decoration
const containerBody = document.querySelector('.container');

// Show/hide the play to score selection
playToSelector.addEventListener('change', () => {
  playToScore = parseInt(playToSelector.value, 10);
});

const addScore = (player) => {
  if (player === 1) {
    playerOneScore++;
    playerOneScoreSpan.innerText = playerOneScore;
  } else {
    playerTwoScore++;
    playerTwoScoreSpan.innerText = playerTwoScore;
  }
};

const showWinner = () => {
  const winnerClass = playerOneScore > playerTwoScore ? 'player-1-wins' : 'player-2-wins';
  containerBody.classList.add(winnerClass);
};

const checkScores = () => {
  if (playerOneScore === playToScore || playerTwoScore === playToScore) {
    playerButtons.forEach((button) => {
      button.disabled = true;
      playToSelector.disabled = true;
      button.style.cursor = 'not-allowed';
      button.style.backgroundColor = 'grey';
    });
    showWinner();
  }
};

// Add listeners to each player button to allow scoring
playerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (playToScore === 0) {
      alert('⚠️ Please select a score to play to first.');
      return;
    }
    addScore(e.target.id === 'button-playerOne-score' ? 1 : 2);
    checkScores();
  });
});

// Reset the game
const resetGame = () => {
  playToScore = 0;
  playerOneScore = 0;
  playerOneScoreSpan.innerText = playerOneScore;
  playerTwoScore = 0;
  playerTwoScoreSpan.innerText = playerTwoScore;
  containerBody.classList.remove('player-1-wins', 'player-2-wins');
  playToSelector.disabled = false;
  console.dir(playToSelector);
  playToSelector.selectedIndex = 0;
  playerButtons.forEach((button, i) => {
    button.disabled = false;
    button.style.cursor = 'pointer';
    button.style.backgroundColor = i === 0 ? '#2D427A' : '#d47d02';
  });
};

resetButton.addEventListener('click', resetGame);
