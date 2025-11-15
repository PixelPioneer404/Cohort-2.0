//No HTML as it doesn't needed

//======================================================
//Level 1 - Basic Function, Array & Object Code Tasks (Easy)
//======================================================
//Q1
function sayHello() {
    console.log("Hello JavaScript")
}
sayHello()

//Q2
function add(a, b) {
    return a + b
}
console.log(add(1, 2))

//Q3
function greetings(name = "Guest") {
    console.log(`Hi, ${name}`)
}
greetings()

//Q4
function addNum(...nums) {
    return nums.reduce((acc, val) => {
        return acc + val
    }, 0)
}
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

    //Q5
    (function () {
        console.log("I ran instantly!")
    })()

//Q6
function outer() {
    let a = 5
    function inner() {
        console.log(a)
    }
    inner()
}
outer()

//Q7
let arr = ['Mango', 'Orange', 'Banana']
arr.push('Guava')
arr.shift()
console.log(arr)

//Q8
let arr1 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

//Q9
let person = {
    name: 'Rajbeer Saha',
    age: 19,
    city: 'kolkata'
}
for (let key in person) {
    console.log(person[key])
}

//Q10
setTimeout(() => {
    console.log("Time's up!")
}, 2000)

//======================================================
//Level 2 - Functional Thinking & Logic Tasks (Intermediate)
//======================================================
//Q1
function runTwice(runIt) {
    runIt()
    runIt()
}
runTwice(() => { console.log("Two Times") })

//Q2
//pure
function pure(val) {
    console.log(val ** 2)
}
pure(12)

//Impure
let a = 5
function impure() {
    a++
}

//Q3
let user = {
    name: 'Rajbeer Saha',
    age: 19
}
function getName({ name, age }) {
    console.log(name, age)
}
getName(user)

//Q4
let obj = {
    fn1: function () {
        console.log(this)
    },
    fn2: () => {
        console.log(this)
    }
}
obj.fn1() //this return the object 'obj' itself
obj.fn2() //this takes it;s 'this' from it's parent, so here fn2's parent is obj, and obj is in global scope, and in global scope , so it gives Window obj

//Q5
let nums = [1, 2, 3, 4, 5]
let sq = nums.map(n => n ** 2)
console.log(sq)

//Q6
let natural = [1,2,3,4,5,6,7,8,9,10]
let even = natural.filter(n => {
    return n % 2 == 0
})
console.log(even)

//Q7
let wages = [1000, 2000, 3000]
let totalSalary = wages.reduce((acc, n) => {
    return acc+n
}, 0)
console.log(totalSalary)

//Q8
let names = ['Rajbeer', 'Debjit', 'Koushik', 'Tsu']
let isAtleast = names.some((val)=>{
    return val.length > 3
})
let isAll = names.every((val)=>{
    return val.length > 3
})
console.log(isAtleast, isAll)

//Q9
let profile = {
    name: 'Rajbeer',
    city: 'Kolkata'
}
Object.freeze(profile) //no addition/modification allowed
Object.seal(profile) //no addition allowed, but you can modify things

//Q10
let userData = {
    name: 'Rajbeer Saha',
    address: {
        city: 'Kolkata'
    }
}
console.log(userData?.address?.city)