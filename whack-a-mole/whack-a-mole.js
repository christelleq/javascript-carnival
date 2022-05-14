// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// DONE! The ability to store or get references to the cells in the HTML table.

let cells = document.getElementsByTagName('td')

// DONE! A function to randomly select which cell should show the mole.

function whichCell() {
  let cellNumber = Math.floor(Math.random() * 25)
  return cellNumber
}

// A way to show a mole in the chosen cell.
