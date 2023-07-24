// Selecting the play to score
const playToSelectionDiv = document.getElementById('dropdown-container-playTo')
const playToButton = document.getElementById('playToSelectionButton')
const playToSelection = document.getElementById('playToSelection')
const PlayToOptions = document.querySelectorAll('.dropdown-selection-playTo')

// Scoring
const playerOneScoreSpan = document.getElementById('playerOneScore');
const playerTwoScoreSpan = document.getElementById('playerTwoScore');
const playerButtons = document.querySelectorAll('.playerButtons');
const playerOneScore = 0;
const playerTwoScore = 0;
let PlayToScore = null;


// Show/hide the play to score selection
playToButton.addEventListener('click', (e) => {
  playToSelectionDiv.style.display = `${playToSelectionDiv.style.display != 'block' ? 'block': 'none' }`;
})

// Add listeners to each play to score option to allow selection
PlayToOptions.forEach((option) => {
  option.addEventListener('click', () => {
    playerOneScore, playToSelection.innerText = parseInt(option.innerText,10);
    playToSelectionDiv.style.display = 'none';
    PlayToScore = parseInt(option.innerText,10);
  })
})

// Add listeners to each player button to allow scoring
playerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (PlayToScore === null) {
      alert('⚠️ Please select a score to play to first.');
      return;
    } else if (e.target.id === 'button-playerOne-score') {
      playerOneScoreSpan.innerText = parseInt(playerOneScoreSpan.innerText,10) + 1;
    } else if (e.target.id === 'button-playerTwo-score') {
      playerTwoScoreSpan.innerText = parseInt(playerTwoScoreSpan.innerText,10) + 1;
    } if (parseInt(playerOneScoreSpan.innerText,10) === PlayToScore) {
      playerOneScoreSpan.classList.add('winner');
      playerTwoScoreSpan.classList.add('loser');
      playerButtons.forEach((button) => {
        button.disabled = true;
      })
    }
  })
})
