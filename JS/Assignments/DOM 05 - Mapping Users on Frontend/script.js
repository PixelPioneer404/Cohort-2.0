import people from './person'

const container = document.querySelector('#container')

people.map((person) => {
    const child =
        `
            <div class="w-[400px] h-[70vh] p-10 flex flex-col justify-center items-center gap-5 bg-white rounded-[40px]">
                <img src="${person.image}" class="w-full aspect-square rounded-3xl shadow">
                <h2 class="font-sans font-bold text-2xl text-orange-400">${person.fullName}</h2>
                <p class="text-wrap text-center w-full font-normal font-sans text-black/60 text-md">${person.desc}</p>
                <p class="font-sans font-normal text-md text-black/90">${person.profession}</p>
                <div class="flex flex-row flex-wrap gap-2">
                    ${person.tags.map((tag) => {
            return `<div class="px-3 py-1 bg-blue-500 rounded text-sm font-sans text-white font-medium">${tag}</div>`
        }).join('')}
                </div>
            </div>
        `
    container.innerHTML += child
})