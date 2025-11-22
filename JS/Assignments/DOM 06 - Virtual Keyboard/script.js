// White Keys
const C3 = document.querySelector('#C3')
const D3 = document.querySelector('#D3')
const E3 = document.querySelector('#E3')
const F3 = document.querySelector('#F3')
const G3 = document.querySelector('#G3')
const A3 = document.querySelector('#A3')
const B3 = document.querySelector('#B3')
const C4 = document.querySelector('#C4')
const D4 = document.querySelector('#D4')
const E4 = document.querySelector('#E4')
const F4 = document.querySelector('#F4')
const G4 = document.querySelector('#G4')
const A4 = document.querySelector('#A4')
const B4 = document.querySelector('#B4')

// Black Keys (Sharp Notes)
const Cs3 = document.querySelector('#Cs3')
const Ds3 = document.querySelector('#Ds3')
const Fs3 = document.querySelector('#Fs3')
const Gs3 = document.querySelector('#Gs3')
const As3 = document.querySelector('#As3')
const Cs4 = document.querySelector('#Cs4')
const Ds4 = document.querySelector('#Ds4')
const Fs4 = document.querySelector('#Fs4')
const Gs4 = document.querySelector('#Gs4')
const As4 = document.querySelector('#As4')

const audios = []

for (let i = 1; i <= 24; i++) {
    audios[i-1] = [
        new Audio(`./media/key${i}.mp3`),
        new Audio(`./media/key${i}.mp3`),
        new Audio(`./media/key${i}.mp3`),
        new Audio(`./media/key${i}.mp3`),
    ]    
}

function playAudio(idx) {
    let audioInstances = audios[idx]
    for(let aud in audioInstances) {
        if(aud.ended || aud.paused) {
            aud.currentTime = 0
            aud.play()
            return
        }
    }

    audioInstances[0].currentTime = 0
    audioInstances[0].play()
}

// white keys
const whiteKeys = [C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4]

function playWhiteKey(idx) {
    whiteKeys[idx].style.backgroundColor = 'lightblue'
    playAudio(idx)
    setTimeout(() => {
        whiteKeys[idx].style.backgroundColor = 'white'
    }, 100)
}

//black keys
const blackKeys = [Cs3, Ds3, Fs3, Gs3, As3, Cs4, Ds4, Fs4, Gs4, As4]

function playBlackKey(idx) {
    blackKeys[idx - 14].style.backgroundColor = 'darkblue'
    playAudio(idx)
    setTimeout(() => {
        blackKeys[idx - 14].style.backgroundColor = 'black'
    }, 100)
}

document.body.addEventListener('keydown', (e) => {
    //white keys
    if (e.code === 'KeyQ') playWhiteKey(0)
    if (e.code === 'KeyW') playWhiteKey(1)
    if (e.code === 'KeyE') playWhiteKey(2)
    if (e.code === 'KeyR') playWhiteKey(3)
    if (e.code === 'KeyT') playWhiteKey(4)
    if (e.code === 'KeyY') playWhiteKey(5)
    if (e.code === 'KeyU') playWhiteKey(6)
    if (e.code === 'KeyI') playWhiteKey(7)
    if (e.code === 'KeyO') playWhiteKey(8)
    if (e.code === 'KeyP') playWhiteKey(9)
    if (e.code === 'KeyZ') playWhiteKey(10)
    if (e.code === 'KeyX') playWhiteKey(11)
    if (e.code === 'KeyC') playWhiteKey(12)
    if (e.code === 'KeyV') playWhiteKey(13)

    //black keys
    if (e.code === 'Digit1') playBlackKey(14)
    if (e.code === 'Digit2') playBlackKey(15)
    if (e.code === 'Digit3') playBlackKey(16)
    if (e.code === 'Digit4') playBlackKey(17)
    if (e.code === 'Digit5') playBlackKey(18)
    if (e.code === 'Digit6') playBlackKey(19)
    if (e.code === 'Digit7') playBlackKey(20)
    if (e.code === 'Digit8') playBlackKey(21)
    if (e.code === 'Digit9') playBlackKey(22)
    if (e.code === 'Digit0') playBlackKey(23)
})