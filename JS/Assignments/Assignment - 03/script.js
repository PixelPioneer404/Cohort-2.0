//No HTML as it doesn't needed

//======================================================
//Level 1 - Pure Begineer Practice
//======================================================
//Q7
let age = null;
while (true) {
    age = prompt("Enter your age:")
    if (age === null) {
        console.error("You Pressed Cancel, enter again")
    } else {
        if (!age.trim()) {
            console.warn("Blank String Not Allowed, enter again")
        } else {
            age = Number(age.trim())
            if (isNaN(age)) {
                console.warn("Enter Valid Age")
            } else {
                console.log(age > 18 ? "Eligible" : "Not Eligible")
                break
            }
        }
    }
}

//Q8
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`)
}

//Q9
let count = 0
for (let i = 1; i < 16; i++) {
    if (i > 8) count++
}
console.log(`There is ${count} numbers in 1 to 15 which is greater than 8`)

//Q10
let actualPass = "Developer007"
let userPass = prompt("Enter you password")
if (actualPass !== userPass) console.warn("Access Denied")
else console.log("Access Granted")

//======================================================
//Level 2 - Slightly Tougher but Logical
//======================================================
//Q11
const realPass = "Developer007"
let enteredPass = null
let isLocked = true
for (let i = 0; i < 3; i++) {
    enteredPass = prompt(`Enter your password(you have ${3 - i} trials ${(3 - i) < 3 ? "left" : "only"}):`)
    while (enteredPass === null || !enteredPass.trim()) {
        console.warn("You have entered nothing or pressed cancel")
        enteredPass = prompt(`Enter your password again(you have ${3 - i} trials only):`)
    }
    if (enteredPass === realPass) {
        console.log("Access Granted")
        isLocked = false
        break
    }
}
if (isLocked) console.log("Account Locked !")

//Q12
let input = prompt("Enter anything and 'stop' to stop:")
let yesCounter = 0
while (input !== "stop") {
    input = prompt("Enter anything and 'stop' to stop:")
    if (input === null) {
        console.error("You pressed cancel")
        continue
    }
    if (input === "yes") yesCounter++
}
console.log(`User has typed 'yes' ${yesCounter} time(s)`)

//Q13
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) console.log(i)
}

//Q14
//Insight - I like aprach based more that's why I haven't used the odd number formula
let sum = 0
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) continue
    sum += i
}
console.log(`Sum is ${sum}`)

//Q15
let num = prompt("Enter a number(enter even number to stop):")
while (num % 2 !== 0) {
    num = prompt("Enter a number(enter even number to stop):")
}

//Q16
let start = prompt("Enter the start number:")
while (start === null || !start.trim() || isNaN(Number(start.trim()))) {
    if (start === null) console.log("You Pressed Cancel")
    else if (!start.trim()) console.log("Empty input detected")
    else if (isNaN(Number(start.trim())) && Number(start.trim()) !== 0) console.log("invalid number")
    start = prompt("Enter the start number:")
}
start = Number(start)
let end = prompt("Enter the end number:")
while (end === null || !end.trim() || isNaN(Number(end.trim()))) {
    if (end === null) console.log("You Pressed Cancel")
    else if (!end.trim()) console.log("Empty input detected")
    else if (isNaN(Number(end.trim())) && Number(end.trim()) !== 0) console.log("invalid number")
    end = prompt("Enter the end number:")
}
end = Number(end)
if (start === end) console.log("Start and End numbers are same")
else if (end - start === 1) console.log("Both are suggessive number")
else {
    for (let i = start + 1; i < end; i++) {
        console.log(i)
    }
}

//Q17
let oddCounter = 0
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        if (oddCounter === 3) break
        console.log(i)
        oddCounter++
    }
}

//Q18
let number = null
let positiveCount = 0
for (let i = 1; i < 6; i++) {
    number = +prompt(`Enter ${i}${i === 1 ? "st" : i === 2 ? "nd" : i === 3 ? "rd" : "th"} number(both +ve and -ve are allowed):`)
    if (number > 0) positiveCount++
}
console.log(`User entered ${positiveCount} positive numbers`)

//Q19 - ATM Simulator
let ACC_BALANCE = 1000
const WITHDRAWLS = 3
let withdrawalAmount = null
console.log(`Total Balance is ${ACC_BALANCE}`)
for (let i = 0; i < WITHDRAWLS; i++) {
    let withdrawalAmount = prompt(`Enter the withdrawal amount(withdrawal left: ${WITHDRAWLS - i}):`)
    while (withdrawalAmount === null || !withdrawalAmount.trim() || isNaN(Number(withdrawalAmount.trim()))) {
        if (withdrawalAmount === null) console.log("You Pressed Cancel")
        else if (!withdrawalAmount.trim()) console.log("Empty input detected")
        else if (isNaN(Number(withdrawalAmount.trim())) && Number(withdrawalAmount.trim()) !== 0) console.log("invalid amount")
        withdrawalAmount = prompt(`Enter the withdrawal amount(withdrawal left: ${WITHDRAWLS - i}):`)
    }
    withdrawalAmount = Number(withdrawalAmount)
    if (withdrawalAmount <= ACC_BALANCE) {
        console.log(`${withdrawalAmount} is deducted`)
        ACC_BALANCE -= withdrawalAmount
        console.log(`Balance Left: ${ACC_BALANCE}`)
    } else {
        console.warn("Insufficient Balance")
        i-- //to prevent reducing the withdrawal attempts as it si insufficient balance case, so user should be given full "actual cash withdrawal" attemps
    }
}
console.log("You are out of withdrawals now, come back later")