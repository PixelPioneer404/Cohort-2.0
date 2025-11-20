const container = document.querySelector('#container')

const people = [
    {
        fullName: "Ava Mitchell",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        profession: "UI/UX Designer",
        desc: "Focused on crafting intuitive, minimal digital experiences with a strong eye for typography and visual hierarchy.",
        tags: ["design", "ux", "figma", "interface"]
    },
    {
        fullName: "Sophia Hayes",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        profession: "Product Manager",
        desc: "Combines user insights and technical understanding to guide product vision and roadmap execution.",
        tags: ["product", "strategy", "research"]
    },
    {
        fullName: "Ethan Brooks",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profession: "Mobile App Developer",
        desc: "Creates seamless mobile experiences with a focus on performance and delightful UI motion.",
        tags: ["flutter", "swift", "android"]
    },
    {
        fullName: "Noah Reynolds",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profession: "Data Scientist",
        desc: "Transforms complex datasets into clear insights with predictive modelling and visualization.",
        tags: ["data", "python", "ml", "analytics"]
    }
];

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