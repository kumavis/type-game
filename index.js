console.log('hello')

const typeTarget = 'galileo'.split('')


const input = document.querySelector('input')
input.focus()

const display = document.querySelector('#display')
window.display = display

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
  display.textContent = typeTarget.join('')
}