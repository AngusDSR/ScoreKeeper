// console.log('Connected');
// select play to:
// get item
// on click display lsit
// add hover effects
// selecting changest the playTo value span and

const playToSelectionDiv = document.getElementById('dropdown-container-playTo')
const playToButton = document.getElementById('playToSelectionButton');
playToButton.addEventListener('click', () => {
  console.log(playToSelectionDiv.style.display)
  playToSelectionDiv.style.display = "block"
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
