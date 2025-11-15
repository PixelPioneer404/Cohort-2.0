const incBtn = document.querySelector('#inc-btn')
const decBtn = document.querySelector('#dec-btn')
const resetBtn = document.querySelector('#reset-btn')
const countDisplay = document.querySelector('#count')

let count = 0

function increase() {
    if (count < 0) count = 0
    count += 1
    countDisplay.style.transform = 'scale(0.8)'
    setTimeout(() => {
        countDisplay.textContent = count
        countDisplay.style.transform = 'scale(1)'
    }, 150)
}

function decrease() {
    count -= 1
    if (count > 0) countDisplay.style.transform = 'scale(0.8)'
    setTimeout(() => {
        countDisplay.textContent = Math.max(0, count)
        countDisplay.style.transform = 'scale(1)'
    }, 150)
}

function reset() {
    count = 0
    countDisplay.textContent = count
}

incBtn.addEventListener('click', increase)
decBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        e.preventDefault()
        increase()
    }
    else if (e.key === "ArrowDown") {
        e.preventDefault()
        decrease()
    }
    else if (e.key === "Shift") {
        e.preventDefault()
        reset()
    }
})