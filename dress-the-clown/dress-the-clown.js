// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// change clown head

let headIndex = 0

function changeClownHead() {
  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
        headIndex = rightArrow(headIndex)
        break
      case 'ArrowLeft':
        headIndex = leftArrow(headIndex)
        break
    }
    console.log(`headIndex: ${headIndex}`)
    headImage = './images/head' + headIndex + '.png'
    document.getElementById('head').src = headImage
  })
}

changeClownHead()

// change clown body
function changeClownBody() {}

// change clown shoes
function changeClownShoes() {}

let clothingIndex = 0

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      if (clothingIndex >= 2) {
        clothingIndex = 0
      } else {
        clothingIndex++
      }
      console.log('clothingIndex: ', clothingIndex)
      break
    case 'ArrowDown':
      if (clothingIndex <= 0) {
        clothingIndex = 2
      } else {
        clothingIndex--
      }
      console.log('clothingIndex: ', clothingIndex)
      break
  }
})

function rightArrow(index) {
  if (index >= 5) {
    index = 0
  } else {
    index++
  }
  return index
}

function leftArrow(index) {
  if (index <= 0) {
    index = 5
  } else {
    index--
  }
  return index
}
