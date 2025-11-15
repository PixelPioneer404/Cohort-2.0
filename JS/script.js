let cricketers = ['virat', 'sachin', 'bumra', 'rohit', 'rajbeer']

function switchPlayer() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    // console.log(cricketers[random])
    switchBtn.style.backgroundColor = `rgb(${r},${g},${b})`
}


const switchBtn = document.querySelector('.switch-btn')
switchBtn.addEventListener('click', switchPlayer)