//No HTML as it doesn't needed

//======================================================
//Topic 1 - Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)
//======================================================
//Q1
let a = 10
let b = 3
console.log(a + b) //13
console.log(a - b) // 7
console.log(a * b) //30
console.log(a / b) // 3.33
console.log(a % b) // 1

//Q2
let x = 3
x = x + 3
x += 3
x -= 3
x *= 3
x /= 3
x %= 3

//Q3
let count = 5
console.log(count)
count++
console.log(count)

//Q4
5 == "5" //true
5 === "5" //false

//Q5
10 > 5 //true
10 < 20 //true
10 === 10 //true

//Q6
true && false //false
true || false //true
!(true) //false

//Q7
5 > 3 && 10 > 8 //true
5 > 3 || 10 < 8 //true

//Q8
console.log(5 & 1) //1
console.log(5 | 1) //5
//This bitwise operator calculates the result in bit level means in binary

//======================================================
//Topic 2 - Variable Hoisting in JavaScript
//======================================================
//Q1
console.log(c) //undefined
var c = 10

//Q2
console.log(d) //ReferenceError - can't access 'd' before initialization
var d = 10

//Q3
test() //simply prints hello as functions supports hoisting in js
function test() {
    console.log("Hello")
}

//Q4
hello() //it will give TypeError - test is not a function
var hello = function () {
    console.log("Hi")
}
//explanation - As it is hoisted using 'var' so on the top scope it automatically inisitialised with 'undefined', so when we call test(), it simply gives an error that it is not a function as it is 'undefined'

//Q5
//variables and functions
//variable declaration part gets hoisted and function declaration+definition is hoisted

//======================================================
//Topic 3 - Conditional Operators (if, else, else-if, ternary, switch)
//======================================================
//Q1
let age = prompt("Enter your age")
age > 18 ? console.log("Adult") : console.log("Minor")

//Q2
if (marks >= 90) console.log("Grade A")
else if (marks >= 75) console.log("Grade B")
else if (marks >= 50) console.log("Grade C")
else console.log("Fail")

//Q3
let city = "Bhopal"
if (city === "Bhopal") console.log("MP")
else if (city === "Delhi") console.log("Capital")
else console.log("Unknown City")

//Q4
let score = 40
score > 35 ? console.log("Pass") : console.log("Fail")

//Q5
temprature > 30 ? "Hot" : "Pleasant"

//Q6
let day = prompt("Enter a day number")
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default: console.log("Invalid Day")
}

//Q7
let newAge = 19
let country = "India"
newAge > 18 && country === "India" ? console.log("Eligible for Vote") : console.log("Not Eligible")