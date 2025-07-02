console.log('===============The “if” statement==========')
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// For eg

/* We recommend wrapping your code block with curly braces {} every time you use an if statement,
 even if there is only one statement to execute. Doing so improves readability. */

const year = ''

if (year == 2015) {
  console.log('You are right!')
} else if (year > 2015) {
  console.log('Too late')
} else {
  console.log('Wrong attempt ')
}

console.log('=====================Boolean conversion==============')

let accessAllowed
const studentNum = 12

if (studentNum > 18) {
  accessAllowed = true
} else {
  accessAllowed = false
}

console.log(accessAllowed)

console.log('=========================Conditional operator ‘?’===============')
/*
The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”,
 because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

 let result = condition ? value1 : value2;
*/
// But parentheses make the code more readable, so we recommend using them.
let classAge
const accessAllowed1 = (classAge > 18)

/*
Please note:
In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same
let accessAllowed = age > 18;
*/

console.log('=====================Multiple ‘?’===========')
/*
🔑 Rule of thumb:
Use it...	             Avoid it...
For simple choices	     For complex logic
To replace if...else	 If it makes code hard to read

✅ When it’s a good design:
For short, simple decisions ✅

Inside assignments or return statements ✅

When you want cleaner code with fewer lines ✅

⚠️ When it’s not a good design:
When you nest too many ternaries ❌

// ❌ Confusing — avoid this
let result = condition1
  ? value1
  : condition2
  ? value2
  : condition3
  ? value3
  : value4;
*/

const ageValue = 10

const message = (ageValue < 3)
  ? 'Hi, baby!'
  : (ageValue < 18)
      ? 'Hello!'
      : (ageValue < 100)
          ? 'Greetings!'
          : 'What an unusual age!'

console.log(message)

console.log('===============✅ The Recommended Way to Use if Statements====')
// 🟩 1. Use clear and readable formatting
// ✅ Good:

// if (ageNum >= 18) {
//   console.log("You are an adult.");
// }

// ❌ Bad:
// if(age>=18){console.log("You are an adult.");}

// ✅ Keep spacing clean and use curly braces {} even for one line — it's safer and easier to read.

// 🟩 2. Use meaningful variable names
// ✅ Good:

// if (isLoggedIn) {
//   showDashboard();
// }

// ❌ Bad:
// if (x) {
//   sd();
// }

// ✅ Clear names make your code self-explanatory.

// 🟩 3. Avoid deeply nested if...else
// ✅ Better:

// if (!isValid) {
//   return;
// }

// if (user.isAdmin) {
//   // do something
// }

// ❌ Worse:
// if (isValid) {
//   if (user.isAdmin) {
//     // do something
//   }
// }

// ✅ Use early returns or break up logic to keep your code flat and clean.

// 🟩 4. Use else if for multiple conditions
// ✅ Good:

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else {
//   grade = "C";
// }

// ✅ Avoid using many if statements without else.

// 🟩 5. Don't overuse the conditional (? :) instead of if
// Only use the ? : when it makes the code shorter and clearer.

// ✅ OK
// let status = isOnline ? "Online" : "Offline";

// // ❌ Not OK
// let status = isOnline ? (isAdmin ? "Admin Online" : "User Online") : "Offline";

// 🧠 Summary: Best Practices for if Statements

// Tip	                                   Why it matters
// ✅ Use curly braces {}	              Prevent bugs, easier to read
// ✅ Use clear variable names	          Easier to understand
// ✅ Avoid deep nesting	                  Keep logic flat and clean
// ✅ Use else if when needed	          Avoid multiple separate ifs
// ✅ Keep conditions simple	              Improves readability and logic

console.log('==========Non-traditional use of ‘?’==============')

console.log('=========Task==============')
if ('0') {
  console.log('Hello')
}

let printMessage
const question = 'EcmaScript'

if (question === 'EcmaScript') {
  printMessage = 'Right!'
} else {
  printMessage = 'Wrong!'
};

console.log(printMessage)

let grade
const countNum = 3

if (countNum > 0) {
  grade = 'A'
} else if (countNum < 0) {
  grade = 'F fail'
} else {
  grade = 'Wow!'
};

console.log(grade)

// Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

const newResult = (countNum < 4) ? 'Below' : 'Over'

console.log(newResult)

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

const login = 'Director'
const loginMessage = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No Login' : ''

console.log(loginMessage)
