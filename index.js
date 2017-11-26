console.log('hello')

const currentWord = 'galileo'
const typeTarget = currentWord.split('')


const input = document.querySelector('input')
input.focus()

const display = document.querySelector('#display')
window.display = display

const fish = document.querySelector('#fish')
const fishStartPos = 840
const fishEndPos = 445


updateDisplay()

input.addEventListener('input', (event) => {
  console.log('hi!')
  const char = event.data
  console.log(char)
  processType(char)
})

function processType(char){
  const nextTarget = typeTarget[0]
  if (nextTarget === char) typeTarget.shift()
  updateDisplay()
}

function updateDisplay(){
  console.log('update display')
  // update text
  display.textContent = typeTarget.join('')
  // update fish
  const fishProgress = (typeTarget.length / currentWord.length)
  const fishPos = fishEndPos + (fishStartPos - fishEndPos) * fishProgress
  fish.style.left = `${fishPos}px`
  console.log(fishPos)
}