const animes = [
    {
        "title": "Demon Slayer",
        "type": "Shonen",
        "year": 2019,
        "backgroundImageURL": "./assets/bg/DS.jpg",
        "profileImageURL": "./assets/pfp/DS.jpg",
        "gradient": "bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "My Hero Academia",
        "type": "Shonen",
        "year": 2016,
        "backgroundImageURL": "./assets/bg/MHA.jpg",
        "profileImageURL": "./assets/pfp/MHA.jpg",
        "gradient": "bg-gradient-to-r from-red-600 via-yellow-400 to-sky-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "Jujutsu Kaisen",
        "type": "Shonen",
        "year": 2020,
        "backgroundImageURL": "./assets/bg/JJK.jpg",
        "profileImageURL": "./assets/pfp/JJK.jpg",
        "gradient": "bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "Naruto",
        "type": "Shonen",
        "year": 2002,
        "backgroundImageURL": "./assets/bg/Naruto.jpg",
        "profileImageURL": "./assets/pfp/Naruto.jpg",
        "gradient": "bg-gradient-to-r from-orange-500 via-amber-400 to-red-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "Dragon Ball",
        "type": "Shonen",
        "year": 1986,
        "backgroundImageURL": "./assets/bg/DB.jpg",
        "profileImageURL": "./assets/pfp/DB.jpg",
        "gradient": "bg-gradient-to-r from-orange-500 via-yellow-400 to-amber-300 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "Chainsaw Man",
        "type": "Shonen",
        "year": 2022,
        "backgroundImageURL": "./assets/bg/CM.jpg",
        "profileImageURL": "./assets/pfp/CM.jpg",
        "gradient": "bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "Kaiju No. 8",
        "type": "Shonen",
        "year": 2024,
        "backgroundImageURL": "./assets/bg/KN8.jpg",
        "profileImageURL": "./assets/pfp/KN8.jpg",
        "gradient": "bg-gradient-to-r from-gray-800 via-lime-600 to-emerald-400 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    },
    {
        "title": "One Piece",
        "type": "Shonen",
        "year": 1999,
        "backgroundImageURL": "./assets/bg/OP.jpeg",
        "profileImageURL": "./assets/pfp/OP.jpg",
        "gradient": "bg-gradient-to-r from-sky-500 via-yellow-300 to-red-500 font-bold text-4xl font-[Cinzel_Decorative] tracking-wide bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    }
]

//selection
const bgImg = document.querySelector('#bg-img')
const pfp = document.querySelector('#pfp')
const titleTxt = document.querySelector('#title-txt')
const desc = document.querySelector('#desc')
const generateBtn = document.querySelector('#generate-btn')

function generateRandomAnime() {
    let idx = Math.floor(Math.random() * animes.length)
    bgImg.src = animes[idx].backgroundImageURL
    pfp.src = animes[idx].profileImageURL
    titleTxt.textContent = animes[idx].title
    if(animes[idx].title === "My Hero Academia") titleTxt.style.fontSize = '28px'
    titleTxt.className = ''
    titleTxt.classList.add(...animes[idx].gradient.split(' '))
    desc.textContent = `${animes[idx].type} • ${animes[idx].year}`
}

generateBtn.addEventListener('click', generateRandomAnime)