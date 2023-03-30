

const container = document.querySelector('.container');
const genBtn = document.getElementById('gen-btn');
const resBtn = document.getElementById('res-btn');
const BOMBS_NUM = 16;





genBtn.addEventListener('click', function () {

  //reset
  reset()

  //set difficult level
  const difficult = document.querySelector('.diff')

  let totalBoxes;
  
  if (difficult.value === 'hard'){
    totalBoxes = 100;
  } else if (difficult.value === 'medium') {
    totalBoxes = 81
  } else if (difficult.value === 'easy') {
    totalBoxes = 49;
  }

  let bomb = generateBombs(totalBoxes);
  console.log(bomb);

  // generate boxes
  for (i = 0; i < totalBoxes; i++ ) {
    let box;
    if (totalBoxes === 100) {
      box = generateBoxes('small-box');
    } else if (totalBoxes === 81) {
      box = generateBoxes('medium-box')
    } else if (totalBoxes === 49) {
      box = generateBoxes('large-box')
    }
    container.append(box);

    //generate id
    box.position = i + 1;
    
    // boxes click
    box.addEventListener('click', function () {
      
      console.log(box.position);
      this.classList.toggle('active')


      if (bomb.includes(box.position)){
        console.log('no')
      }
    })
  }
  // generate bombs


})







function generateBoxes (boxN) {
  const boxElement = document.createElement('div')
  boxElement.classList.add(boxN)
  return boxElement
}

function generateBombs (nBox) {
  let bombs = []


  while(bombs.length < BOMBS_NUM){
    let randomN = Math.floor((Math.random() * nBox ) + 1)
    if (!bombs.includes(randomN)) {
      bombs.push(randomN)
    }
  }

return bombs

  console.log(randomN);
  console.log(bombs);
}

function reset () {
  const container = document.querySelector('.container');
  container.innerHTML = ''
}