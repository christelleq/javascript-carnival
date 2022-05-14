// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// DONE! create a function that gets called every time you click on one of the unicorns

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}

function unicornClicked(e) {
  let image = e.target
  console.log('hey!', image)
}
