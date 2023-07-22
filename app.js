// console.log('Connected');
// select play to:
// get item
// on click display lsit
// add hover effects
// selecting changest the playTo value span and

const playToSelectionDiv = document.getElementById('dropdown-container-playTo')
const playToButton = document.getElementById('playToSelectionButton')
const playToSelection = document.getElementById('playToSelection')
const PlayToOptions = document.querySelectorAll('.dropdown-selection-playTo')
let PlayToScore = null;

playToButton.addEventListener('click', () => {
  playToSelectionDiv.style.display = `${playToSelectionDiv.style.display != 'block' ? 'block': 'none' }`;
  // playToSelectionDiv.style.display == '' ? playToSelectionDiv.style.display = "block" : null;
})
PlayToOptions.forEach((option) => {
  option.addEventListener('click', () => {
    playerOneScore, playToSelection.innerText = parseInt(option.innerText,10);
    playToSelectionDiv.style.display = 'none';
  })
})


const playerOneScoreSpan = document.getElementById('playerOneScore');
const playerTwoScoreSpan = document.getElementById('playerTwoScore');

// create function which adds ScreenOrientation
// const raisePlayerScore (player) => {
//
// }

// for each in [One, Two] add event listener to getElementById(`button-player${player}-score`)

const playerOneScore = 0;
document.getElementById('button-playerOne-score');

// DEBUG
// console.log('playerOneScoreSpan: ', playerOneScoreSpan);
// console.log('playerTwoScoreSpan: ', playerTwoScoreSpan);
// console.log('playToButton: ', playToButton);
