const progress = document.querySelector('#progress')
const progressDig = document.querySelector('#progressDig')
const downloadBtn = document.querySelector('#download-btn')
let width = 0

downloadBtn.addEventListener('click', () => {
    if (width === 100) width = 0
    downloadBtn.classList.add('pointer-events-none', 'opacity-40')
    downloadBtn.textContent = 'Downloading...'
    const downloadIterval = setInterval(() => {
        width++
        progress.style.width = `${width}%`
        progressDig.textContent = `${width}%`
    }, 50)

    setTimeout(() => {
        clearInterval(downloadIterval)
        downloadBtn.classList.remove('pointer-events-none', 'opacity-40')
        downloadBtn.textContent = 'Downloaded'
        setTimeout(() => {
            downloadBtn.textContent = 'Download Again'
        }, 1000)
    }, 5000)
})