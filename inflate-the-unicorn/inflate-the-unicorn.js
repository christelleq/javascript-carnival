// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// DONE! create a function that gets called every time you click on one of the unicorns

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
  console.log(unicorns[i])
}

function unicornClicked(e) {
  let image = e.target
  // DONE! when you click the button your function should change the image of the unicorn to one of the other images
  console.log('hey!', image)

  if (image.src.match('./images/unicorn-0.png')) {
    image.src = './images/unicorn-1.png'
    console.log('1')
  } else if (image.src.match('./images/unicorn-1.png')) {
    image.src = './images/unicorn-2.png'
    console.log('unicorn 2')
  } else if (image.src.match('./images/unicorn-2.png')) {
    image.src = './images/unicorn-3.png'
    console.log('unicorn 3')
  }
}
