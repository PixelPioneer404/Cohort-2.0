# Introduction to JavaScript
1. Documnet
2. Try: alert(“Hello from Sheryians!”) ✅
3. brain
4. tooltip

# Linking JavaScript Files - done✅
1. Create an HTML file and link JS file like this:
2. In app.js, write: console.log(“Connected!”)
3. Move the script tag to the section and see what happens.
4. Try using defer:
    <script defer src="script1.js"></script>
    <script defer src="script2.js"></script>

# Running JS in Browser Console - done✅
1. Open console and type: 2 + 2
2. Type: alert(“Hi”)
3. Try: prompt(“Your name?”)
4. Type: let city = “Bhopal”; city

# Variables and Keywords (var, let, const)
1.  var a = "Rajbeer Saha"
    let b = "Rajbeer Saha"
    const c = "Rajbeer Saha"
2.  a = "updated" - done✅
    b = "updated" - done✅
    c = "updated" - error❌
3.  {
        let num = 100
    }
    console.log(num) - ❌ ReffeanceError, num is not defined 
4. Predict output before running. - done✅
5. pi, appName, uid

# Logging and Interaction (console, alert, prompt)
1.  console.log("Rajbeer Saha")
    console.info(19)
    console.warn("Kolkata")
2.  let name = prompt("What's your name ?")
    alert(`Welcome ${name}`)
3.  console.log(name)
4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens. - (age = 19)I takes the prompt input as a STRING not NUMBER, so it becomes 195 not 24

# Working with Strings
1. let msg = “I love Sheryians”;
2. Try msg.slice(2, 6) and predict the result - love
3.  let words = msg.split(" ")
    console.log(words.length) - Returns 3
4. Try msg.replace(“love”, “study at”) - Returns "I study at Sheryians"
5. Template string example: let name = “Harsh”; console.log(Hey ${name},
welcome to JS!) - Returns "Hey Harse, welcome to JS!"
6. Check if msg.includes(“love”) - false

# Statements and Semicolons
1. Remove semicolon and check if code still runs - Yes✅ JS runs smoothly w/0 ';' but if you write code in one single line the you have to use semicolons
2. Combine two statements in one line and see if it breaks - Yes it breaks
3. Write 3 console.log statements without semicolons and predict output - they will give mornal outputs

# Comments
1. //Rajbeer Saha
2.  //My code
    //does
    //nothing
3. //console.log("hello) - no output

# Expressions vs Statements
1. Type 5 + 10 (expression).
2. Type let x = 10; (statement).
3. Which one gives a value immediately? - 1
4. Try: let y = (5 + 10) * 2; console.log(y) - 30
5. Statement gives nothing they just do actions but expressions immidiately gives the result/value

# Data Types
1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“ JS”,“HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
2.  console.log(typeof(age)) - number
    console.log(typeof(name)) - string
    console.log(typeof(isStudent)) - boolean
    console.log(typeof(skills)) - object
    console.log(typeof(user)) - object
    console.log(typeof(x)) - object
    console.log(typeof(y)) - undefined
    console.log(typeof(z)) - symbol
3.  x = NaN
    console.log(typeof(x)) - number
4. console.log(age+name) - 25Harsh

# Special Values
1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
2.  console.log(1/0) - infinity
    console.log(0/0) - NaN
    console.log(Number("abc")) - NaN
    console.log(undefined+1) - NaN
3. We'll use null when we have to give a variable no value and undefined is automatically given when we don't initialize a variable

# Primitive vs Reference
1. let x = 5; let y = x; y = 10; console.log(x, y) - 5, 10
2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;console.log(obj1.name) - "Sheryians"
3. Observe which one changes together - the object one, as it is reference type data so it passes the reference only
4. Draw memory boxes on paper to visualize difference - done✅