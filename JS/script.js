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
    if (withdrawalAmount < ACC_BALANCE) {
        console.log(`${withdrawalAmount} is deducted`)
        ACC_BALANCE -= withdrawalAmount
        console.log(`Balance Left: ${ACC_BALANCE}`)
    } else {
        console.warn("Insufficient Balance")
        i-- //to prevent reducing the withdrawal attempts as it si insufficient balance case, so user should be given full "actual cash withdrawal" attemps
    }
}
console.log("You are out of withdrawals now, come back later")