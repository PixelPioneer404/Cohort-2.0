//================SECTION 1: OOPS Thinking with Objects================
// Q1, Q2, Q3
const laptop = {
    brand: "Apple",
    price: 99900,
    start: function () {
        console.log(`${this.brand} laptop started succesfully`);
    },
    increasePrice: function () {
        this.price += this.price * 0.1
        console.log(`${this.price} is the new price`);
    }
}
// Problem, for creating 10 laptops like this, we will have t create 10 different opject with thier unique names by which the code will become very large and unmanagable due to the var names

//================SECTION 2: Classes and Objects (Reinforcement)================
// Q4
class Employee {
    constructor() {
        this.name = "Rajbeer"
        this.salary = "1cr"
    }
    showDetails() {
        console.log(`${this.name} - ${this.salary}`);
    }
}

// Q5
const e1 = new Employee()
const e2 = new Employee()
const e3 = new Employee()

//Q6 - Because Class gives a bluepront of the objects to create which not only consists the value the object will have but also give you freedom to write object scoped unique method to them and using just the 'new' keyword easily any instance(object) can be created

//================SECTION 3: Constructor and Initialization================
// Q7, Q8, Q9
class BankAccount {
    constructor(name, balance) {
        this.accountHolderName = name
        this.balance = balance
    }
    deposite(amount) {
        this.balance += amount
    }
}

// Q10
const account1 = new BankAccount("Rajbeer", 530)
const account2 = new BankAccount("Debjit", 2202)
account1.deposite(120)
console.log(account1)
// The second account is not affected becuase despite being the same class instance, it's completely has no connection with other instances and I only ran the method on the 1st account, so account2 had no affect

//================SECTION 4: Understanding this (Very Important)================
// Q11, Q12, Q13, Q14
const profile = {
    username: "Rajbeer",
    printName: function () {
        console.log(this.username)
    }
}
const method = profile.printName // It gave the username normally
method() //But this method function gave undefined, becuase this method fn has it's own this but is not called ina ibject scope that's which it took window as it's scope which doesn't have any username field
// The correct way is
method.call(profile)

//================SECTION 5: Constructor Function and Prototype================
// Q15, Q16, Q17. Q18
class Car {
    constructor() {
        this.type = "Racing"
        this.wheels = "Alloy"
    }
}
// When multiple objects are created each one will have the method which will increase mempry usage which is not ideal

// So the way is
Car.prototype.describe = () => { }
// Now no matter how many objects you create this method will not be created and will not take space for each of the created objects

//================SECTION 6: call Method Practice================
// Q19, Q20, Q21, Q22
const brand1 = {
    name: "Zara"
}
const brand2 = {
    name: "H&M"
}
function showBrand() {
    console.log(this.name)
}
showBrand() // giving "" as showBrand fn is not connected with any obj to use the this
showBrand.call(brand1)
showBrand.call(brand2)
// Here, call method is giving us abiloty to attach any object with any function to use them

//================SECTION 7: apply Method Practice================
// Q23, Q24, Q25, Q26
const obj = {
    name: "Rajbeer"
}

function introduce(city, role) {
    console.log(`Name: ${this.name},\nCity: ${city},\nRole: ${role}`)
}

introduce.apply(obj, ["Kolkata", "Web Developer"])
// Same as call just arguments are passed in an argument array instead of sending separately

//================SECTION 8: bind Method Practice================
// Q27, Q28, Q29, Q30
function greet() {
    console.log(`Hello, ${this.name}`)
}

const greetName = {
    name: "Rajbeer"
}

const greetUser = greet.bind(greetName)
greetUser()
// bind() ensures a function remembers its correct this context when executed later by external code.