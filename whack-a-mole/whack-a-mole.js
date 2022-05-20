// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// DONE! The ability to store or get references to the cells in the HTML table.

let cells = document.getElementsByTagName('td')

// DONE! A function to randomly select which cell should show the mole.

let cellNumber

function whichCell() {
  randomIndex = Math.floor(Math.random() * 25)
  while (cellNumber == randomIndex) {
    randomIndex = Math.floor(Math.random() * 25)
  }
  cellNumber = randomIndex
  console.log(`cell number: ${cellNumber}`)
  return cellNumber
}

// DONE! A way to show a mole in the chosen cell.
function showMole(cellNumber) {
  const image = document.createElement('img')
  image.setAttribute('src', './mole.png')
  image.setAttribute('id', 'mole')
  image.setAttribute('height', 70)
  image.setAttribute('width', 70)
  cells[cellNumber].appendChild(image)
  cells[cellNumber].addEventListener('click', whackedMole)
  cells[cellNumber].addEventListener('click', countWhacks)
}

showMole(whichCell())

function whackedMole(e) {
  playSound()
  cells[cellNumber].innerHTML = ''
  showMole(whichCell())
}

function playSound() {
  let audio = new Audio()
  audio.src = './whack-audio.wav'
  audio.play()
}

// DONE! Add a `counter` to the page that counts how many times you have whacked the mole!

let whackCount = 0

function countWhacks() {
  whackCount++
  document.getElementById('whackCount').innerHTML = `Whack Count: ${whackCount}`
  console.log(`whackCount: ${whackCount}`)
}

// DONE! Add a `timer` to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

window.onload = function () {
  window.addEventListener(
    'load',
    setTimer(),
    alert(`You have 10 seconds to whack as many moles as you can!`)
  )
}

function setTimer() {
  setTimeout(scoreAlert, 10000)
  setTimeout(setHighScore, 10000)
  setTimeout(displayHighScore, 10000)
}

function scoreAlert() {
  alert(`Your score is ${whackCount}`)
}

// we want the game to restart when the timer is up
// we want the score to reset
// we could add a button to 'play again'

// DONE! Add a `high score` field that stores your highest score and replaces it if a new, higher score is achieved. _*Note:_ for now, this score will be reset when you refresh your browser. For it to last, you would need some form of _database_, which we  cover later during bootcamp.

highScore = whackCount

function displayHighScore() {
  document.getElementById('highScore').innerHTML = `High Score: ${highScore}`
}

function setHighScore() {
  if (whackCount > highScore) {
    highScore = whackCount
  } else {
    highScore = highScore
  }
}

// DONE! Rewrite your `random index` function so it can't give you the same index twice in a row.
