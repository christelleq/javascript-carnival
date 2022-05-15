// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clothingIndex = 0

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowDown':
      if (clothingIndex >= 2) {
        clothingIndex = 0
      } else {
        clothingIndex++
      }
      console.log('clothingIndex: ', clothingIndex)
      whichBodyPart(clothingIndex)
      break
    case 'ArrowUp':
      if (clothingIndex <= 0) {
        clothingIndex = 2
      } else {
        clothingIndex--
      }
      console.log('clothingIndex: ', clothingIndex)
      whichBodyPart(clothingIndex)
      break
  }
})

let bodyPart = 'head'

function whichBodyPart(clothingIndex) {
  if (clothingIndex == 0) {
    bodyPart = 'head'
  } else if (clothingIndex == 1) {
    bodyPart = 'body'
  } else if (clothingIndex == 2) {
    bodyPart = 'shoes'
  }
  console.log('bodyPart', bodyPart)
  return bodyPart
}

let index = 0

document.addEventListener('keydown', function changeClothes(e) {
  switch (e.key) {
    case 'ArrowRight':
      index = rightArrow(index)
      break
    case 'ArrowLeft':
      index = leftArrow(index)
      break
  }
  console.log(`index: ${index}`)
  image = './images/' + bodyPart + index + '.png'
  console.log(image)
  document.getElementById(bodyPart).src = image
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
