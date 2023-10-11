const board = document.querySelector('.board')
const btnRainbow = document.querySelector('.rainbow')
const btnEraser = document.querySelector('.eraser')
const btnClearAll = document.querySelector('.clear-all')

document.addEventListener('DOMContentLoaded', function () {
  const board = document.querySelector('.board')
  const divWidth = 20 // Szerokość pojedynczego diva
  const divHeight = 20 // Wysokość pojedynczego diva
  const boardWidth = board.offsetWidth
  const boardHeight = board.offsetHeight
  const divsInRow = Math.floor(boardWidth / divWidth)
  const divsInColumn = Math.floor(boardHeight / divHeight)
  const totalDivs = divsInRow * divsInColumn

  for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div')
    board.appendChild(div)
  }
})

let isMouseDown = false

document.addEventListener('mousedown', function (e) {
  if (e.button === 0 && e.target && e.target.tagName == 'DIV') {
    isMouseDown = true
    e.target.style.backgroundColor = 'pink' // Zmień kolor tła pierwszego diva
  }
})

document.addEventListener('mouseup', function (e) {
  isMouseDown = false
})

document.addEventListener('mouseover', function (e) {
  if (isMouseDown && e.target && e.target.tagName == 'DIV') {
    e.target.style.backgroundColor = 'pink' // Zmień kolor tła diva, nad którym jest kursor
  }
})
