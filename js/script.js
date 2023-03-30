

const container = document.querySelector('.container');
const genBtn = document.getElementById('gen-btn');
const resBtn = document.getElementById('res-btn');
const BOMBS_NUM = 16;

let pointsCounter = 0;







genBtn.addEventListener('click', function () {

  
  //reset
  reset();
  
  //set total boxes
  const totalBoxes = setTotalBoxes ();
  let bombs = generateBombs(totalBoxes);
  console.log(bombs);
  
  // generate boxes size
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
  
      pointsCounter++
      console.log(pointsCounter);

      const arrayElementi = document.getElementsByClassName('box');
      console.log(box.position);
      if (pointsCounter === totalBoxes -BOMBS_NUM) {
        endGame();
      }
      
      //aggiungo classe active
      this.classList.add('active')
      
      //click sulla bomba

      if (bombs.includes(box.position)){
        console.log('hai preso una bomba')
        endGame();
        for (i = 0; i < bombs.length; i++) {
          arrayElementi[bombs[i]-1].classList.add('bomb')
        }
      }



    })
  }
})




//----------------------------------------------------------------------



function onBoxClick () {
  this.removeEventListener('click')
  pointsCounter++
  console.log(pointsCounter);
  const arrayElementi = document.getElementsByClassName('box');
  console.log(box.position);
  if (pointsCounter === 3) {
    endGame();
  }
}


function setTotalBoxes () {

  const difficult = document.querySelector('.diff')

  let totalBoxes;
  
  if (difficult.value === 'hard'){
    totalBoxes = 100;
  } else if (difficult.value === 'medium') {
    totalBoxes = 81
  } else if (difficult.value === 'easy') {
    totalBoxes = 49;
  }

  return totalBoxes;
}


function takeAllBombs (classActive) {
  for (i = 0; i < bomb.length; i++) {
    const arrayElementi = document.getElementsByClassName(classActive);
    console.log(arrayElementi);
    //arrayElememti[bomb[i]-1]
  }
}

function generateBoxes (boxN) {
  const boxElement = document.createElement('div')
  boxElement.classList.add(boxN, 'box')
  return boxElement
}

function generateBombs (nBox) {
  let bombs = []
  while(bombs.length < BOMBS_NUM){
    let randomN = Math.floor(Math.random() * nBox  + 1)
    if (!bombs.includes(randomN)) {
      bombs.push(randomN)
    }
  }
  return bombs
}

function reset () {
  const container = document.querySelector('.container');
  container.innerHTML = ''
}

function endGame() {
  const container = document.querySelector('.container');
  console.log('endgame');
  const overlay = document.createElement('div');
  overlay.className = 'over'
  container.append(overlay)
}