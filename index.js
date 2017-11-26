console.log('hello')

const input = document.querySelector('input')
input.focus()

const display = document.querySelector('#display')
window.display = display

input.addEventListener('input', (event) => {
  const character = event.data
  display.textContent = character
  console.log(character)
})
