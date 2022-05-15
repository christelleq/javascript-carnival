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
        if (headIndex >= 5) {
          headIndex = 0
        } else {
          headIndex++
        }
        break
      case 'ArrowLeft':
        if (headIndex <= 0) {
          headIndex = 5
        } else {
          headIndex--
        }
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
