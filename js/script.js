

const container = document.querySelector('.container');
const genBtn = document.getElementById('gen-btn');
const resBtn = document.getElementById('res-btn');




genBtn.addEventListener('click', function () {
  
  reset()
  const difficult = document.querySelector('.diff')

  let totalBoxes;
  
  if (difficult.value === 'hard'){
    totalBoxes = 100;
  } else if (difficult.value === 'medium') {
    totalBoxes = 81
  } else if (difficult.value === 'easy') {
    totalBoxes = 49;
  }
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
      box.position = i + 1;

      box.addEventListener('click', function () {

        console.log(box.position);
        this.classList.toggle('active')
      })
    }
})







function generateBoxes (boxN) {
  const boxElement = document.createElement('div')
  boxElement.classList.add(boxN)
  return boxElement
}

function reset () {
  const container = document.querySelector('.container');
  container.innerHTML = ''
}