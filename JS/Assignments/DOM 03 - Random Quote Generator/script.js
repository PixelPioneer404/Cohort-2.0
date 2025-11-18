const quoteTxt = document.querySelector('#quote-txt')
const generateBtn = document.querySelector('#generate-btn')

async function generateRandomQuotes() {
    const API_KEY = 'HbD8hRQI4swC48Zfsr6NTA==ymV5UR9ssv7U42gp'
    const response = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
        headers: {
            'X-api-key': API_KEY
        }
    })
    if (!response.ok) throw new Error('Fetch Failed')
    const result = await response.json()
    quoteTxt.textContent = `"${result[0].quote}"`
}

generateRandomQuotes()

generateBtn.addEventListener('click', generateRandomQuotes)