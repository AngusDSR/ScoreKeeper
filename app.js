// Selecting the play to score
const playToSelectionDiv = document.getElementById('dropdown-container-playTo')
const playToButton = document.getElementById('playToSelectionButton')
const playToSelection = document.getElementById('playToSelection')
const PlayToOptions = document.querySelectorAll('.dropdown-selection-playTo')

// Scoring
const playerOneScoreSpan = document.getElementById('playerOneScore');
const playerTwoScoreSpan = document.getElementById('playerTwoScore');
const playerButtons = document.querySelectorAll('.playerButtons');
const resetButton = document.getElementById('reset-button');
let playerOneScore = 0;
let playerTwoScore = 0;
let PlayToScore = null;

// Winner's decoration
const containerBody = document.querySelector('.container');

// Show/hide the play to score selection
playToButton.addEventListener('click', (e) => {
  playToSelectionDiv.style.display = `${playToSelectionDiv.style.display != 'block' ? 'block': 'none' }`;
})

// Add listeners to each play to score option to allow selection
PlayToOptions.forEach((option) => {
  option.addEventListener('click', () => {
    playToSelection.innerText = parseInt(option.innerText,10);
    playToSelectionDiv.style.display = 'none';
    PlayToScore = parseInt(option.innerText,10);
  })
})

const addScore = (player) => {
  if (player === 1) {
    playerOneScore += 1;
    playerOneScoreSpan.innerText = playerOneScore;
  } else {
    playerTwoScore += 1;
    playerTwoScoreSpan.innerText = playerTwoScore;
  }
}

const showWinner = () => {
  if (playerOneScore > playerTwoScore) {
    containerBody.classList.add('player-1-wins');
  } else {
    containerBody.classList.add('player-2-wins');
  }
}

const checkScores = () => {
  if (playerOneScore === PlayToScore || playerTwoScore === PlayToScore) {
    playerButtons.forEach((button) => {
      button.disabled = true;
      button.style.cursor = 'not-allowed';
      button.style.backgroundColor = 'grey';
    })
    showWinner();
  }
}

// Add listeners to each player button to allow scoring
playerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (PlayToScore === null) {
      alert('⚠️ Please select a score to play to first.');
      return;
    } else if (e.target.id === 'button-playerOne-score') {
      addScore(1)
    } else {
      addScore(2)
    }
    checkScores();
  })
})


// Reset the game
const resetGame = () => {
  playToSelection.innerText = "Select"
  playerOneScore = 0;
  playerOneScoreSpan.innerText = playerOneScore;
  playerTwoScore = 0;
  playerTwoScoreSpan.innerText = playerOneScore;
  console.log(playerOneScore, playerOneScoreSpan.innerText, playerTwoScore, playerTwoScoreSpan.innerText);
  containerBody.classList.remove('player-1-wins');
  containerBody.classList.remove('player-2-wins');
  playerButtons.forEach((button, i) => {
    button.disabled = false;
    button.style.cursor = 'pointer';
    if (i === 0) {
      button.style.backgroundColor = '#2D427A';
    } else {
      button.style.backgroundColor = '#d47d02';
    }
  })
1}

resetButton.addEventListener('click', resetGame);
