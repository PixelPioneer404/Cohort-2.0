// Create the array
const arr = [1, 2, 3, 4]

//hidden part
Array.prototype.forEachClone = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}

// Use forEach to print
arr.forEachClone((el) => {
    console.log(el)
})

//hidden part
Array.prototype.mapClone = function (cb) {
    const tempArr = []
    for (let i = 0; i < this.length; i++) {
        let response = cb(this[i])
        tempArr.push(response)
    }
    return tempArr
}

//Use map to get squares
const newArr = arr.mapClone((el) => {
    return el * el
})
console.log(newArr) // [1, 4, 9, 16]