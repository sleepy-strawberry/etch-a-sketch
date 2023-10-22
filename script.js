const board = document.querySelector('.board')
const btnRainbow = document.querySelector('.rainbow')
const btnEraser = document.querySelector('.eraser')
const btnClearAll = document.querySelector('.clear-all')
const applyColorBtn = document.querySelector('.apply-color')

let selectedColor = '#A424AE'

document.addEventListener('DOMContentLoaded', function () {
  const board = document.querySelector('.board')
  const divWidth = 10 // Szerokość pojedynczego diva
  const divHeight = 10 // Wysokość pojedynczego diva
  const boardWidth = board.offsetWidth
  const boardHeight = board.offsetHeight
  const divsInRow = Math.floor(boardWidth / divWidth)
  const divsInColumn = Math.floor(boardHeight / divHeight)
  const totalDivs = divsInRow * divsInColumn

  for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div')
    div.dataset.originalColor = '#F0F0F0'
    board.appendChild(div)
  }
})

let isMouseDown = false

document.addEventListener('mousedown', function (e) {
  if (e.button === 0 && e.target && e.target.tagName == 'DIV') {
    isMouseDown = true
    if (selectedColor === 'rainbow') {
      e.target.style.backgroundColor = getRandomRainbowColor()
    } else {
      e.target.style.backgroundColor = selectedColor
    }
  }
})

document.addEventListener('mouseup', function (e) {
  isMouseDown = false
})

document.addEventListener('mouseover', function (e) {
  if (isMouseDown && e.target && e.target.tagName == 'DIV') {
    if (selectedColor === 'rainbow') {
      e.target.style.backgroundColor = getRandomRainbowColor()
    } else {
      e.target.style.backgroundColor = selectedColor
    }
  }
})

btnClearAll.addEventListener('click', () => {
  var divs = document.querySelectorAll('.board div')

  divs.forEach(function (div) {
    div.style.backgroundColor = div.dataset.originalColor
  })
})

btnRainbow.addEventListener('click', () => {
  selectedColor = 'rainbow'
})

btnEraser.addEventListener('click', () => {
  selectedColor = '#F0F0F0'
})

applyColorBtn.addEventListener('click', () => {
  selectedColor = colorInput.value
})

function getRandomRainbowColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
