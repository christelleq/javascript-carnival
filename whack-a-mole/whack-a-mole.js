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

// A way to show a mole in the chosen cell.
function showMole(cellNumber) {
  const image = document.createElement('img')
  image.setAttribute('src', './mole.png')
  image.setAttribute('id', 'mole')
  image.setAttribute('height', 75)
  image.setAttribute('height', 75)
  cells[cellNumber].appendChild(image)
  console.log(cellNumber)
}

showMole(whichCell())

cells[cellNumber].onclick = function whackedMole() {
  console.log(cellNumber)
  cells[cellNumber].innerHTML = ''
}
