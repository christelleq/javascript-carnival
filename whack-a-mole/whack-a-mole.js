// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// DONE! The ability to store or get references to the cells in the HTML table.

let cells = document.getElementsByTagName('td')

// DONE! A function to randomly select which cell should show the mole.

let cellNumber

function whichCell() {
  cellNumber = Math.floor(Math.random() * 25)
  console.log(cellNumber)
  return cellNumber
}

// DONE! A way to show a mole in the chosen cell.
function showMole(cellNumber) {
  const image = document.createElement('img')
  image.setAttribute('src', './mole.png')
  image.setAttribute('id', 'mole')
  image.setAttribute('height', 70)
  image.setAttribute('height', 70)
  cells[cellNumber].appendChild(image)
  console.log(cellNumber)
  cells[cellNumber].addEventListener('click', whackedMole)
  cells[cellNumber].addEventListener('click', countWhacks)
}

showMole(whichCell())

function whackedMole() {
  console.log(cellNumber)
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

// Add a `timer` to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

// Add a `high score` field that stores your highest score and replaces it if a new, higher score is achieved. _*Note:_ for now, this score will be reset when you refresh your browser. For it to last, you would need some form of _database_, which we  cover later during bootcamp.

// Rewrite your `random index` function so it can't give you the same index twice in a row.
