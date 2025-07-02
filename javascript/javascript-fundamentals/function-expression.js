console.log('===========Function expressions============')
// In JavaScript, a function is not a “magical language structure”, but a special kind of value.
// A function expression means creating a function and assigning it to a variable.
// The syntax that we used before is called a Function Declaration:

function sayHi () {
  console.log('Hi')
};

const greet = function (day) {
  console.log(`Good ${day}!`)
}

greet('Morning')

/*
There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

*/

// For example:

const sayHi2 = function () {
  console.log('Hello')
}

sayHi2()

/*

✅ When is a function expression a good design?

1. When you need to pass functions as values

const run = function(callback) {
  callback();
};

run(function() {
  console.log("Running...");
});

2. When using arrow functions

const greet = () => console.log("Hi!");
greet();

3. When using functions inside objects or callbacks

const user = {
  sayName: function() {
    console.log("I'm John");
  }
};

4. When you want to limit scope
Function expressions are not hoisted, so they’re more controlled:

sayHi(); ❌ Error: Cannot access before initialization

const sayHi = function() {
  console.log("Hi");
};

❗ When function declarations may be better
When you need the function available anywhere in the file (because declarations are hoisted)

sayHello();  ✅ Works, because it's hoisted

function sayHello() {
  console.log("Hello");
}
*/

/*
Why is there a semicolon at the end?

You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;.
The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.
*/

console.log('============Callback functions==========')
// The function should ask the question and, depending on the user’s answer, call yes() or no():

// A callback is just a function passed as an argument to another function.

// 👉 Any parameter can be a callback, depending on how the function is written.

/*
✅ Best Practice
Use callbacks for simple actions (like event handling)

Use arrow functions or named functions for clarity

For complex tasks, prefer Promises or async/await
*/

/*
🧠 What Is Hoisting?
In JavaScript, function declarations are hoisted, but function expressions are not.

This means:

You can call a function declaration even before it's written in your code.

But if you try that with a function expression, it will give an error.

✅ 1. Function Declaration — You can call it before or after

sayHi(); // ✅ Works!

function sayHi() {
  console.log("Hello!");
}
This works because JavaScript "moves" function declarations to the top when running the code — this is hoisting.

❌ 2. Function Expression — You must define it before calling
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hi!");
};
This does not work because function expressions are not hoisted.

✅ Best Practice for You
Use function declarations if you want to define your main functions at the bottom and call them at the top.

Use function expressions when passing functions (like callbacks) or when you want to control the scope.

🧠 What is Hoisting?
Hoisting means that JavaScript moves declarations to the top of the code before running it.

In simple terms:
JavaScript reads your code first and "hoists" (lifts) certain things — like variable declarations and function
declarations — to the top of their scope.

✅ Example 1: Hoisting a Function Declaration
sayHi(); // ✅ Works!

function sayHi() {
  console.log("Hello!");
}
Even though sayHi() is called before it's defined, it works!

Why? Because JavaScript hoisted the function sayHi() to the top.

❌ Example 2: Function Expression is Not Hoisted
sayHello(); // ❌ Error

const sayHello = function() {
  console.log("Hi!");
};
This gives an error because function expressions are NOT hoisted.

JavaScript does not lift the value, only the declaration of sayHello, which is still undefined.

📦 Hoisting Also Affects Variables
console.log(a); // undefined
var a = 5;

JavaScript treats it like:
var a;
console.log(a); // undefined
a = 5;
So var is hoisted (but not the value), and it becomes undefined.

🚫 Let vs Const (Modern JS)
Variables declared with let and const are not hoisted in the same way.
They exist in a special area called the "temporal dead zone" — if you access them before they’re declared, you get an error.
console.log(b); // ❌ ReferenceError
let b = 10;

✅ Summary Table
Type	    Hoisted?	    Value Hoisted?	       Safe to Use Before Declaration?
function	✅ Yes	        ✅ Yes	             ✅ Yes
var	        ✅ Yes	        ❌ No (undefined)	 ⚠️ Maybe
let / const	✅ (but blocked)	❌ No	             ❌ No (ReferenceError)
function expression	❌ No	❌ No	             ❌ No
*/

function ask (question, yes, no) {
  if (question !== '') {
    yes()
  } else no()
};

function showOk () {
  console.log('You agreed.')
}

function showCancel () {
  console.log('You canceled the execution.')
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask('', showOk, showCancel)

// We can use Function Expressions to write an equivalent, shorter function:
function ask2 (question, yes, no) {
//  question is undefined - it will not print the yes and "" is false it will not also print it-so the second function will run
  if (question ?? true) {
    yes()
  } else no()
}

let yourName
console.log(yourName)
ask2(
  undefined,
  function () { console.log('You agreed well!') },
  function () { console.log('You canceled the execution.') }
)

/*
Best function to use for callback functions:
✅ Best Function Types for Callbacks (Ranked by Use Case)
Function Type	                 Recommended for Callbacks?	       When to Use It
✅ Arrow Function	            ⭐ Best for most cases	        Short, simple callbacks — especially for array methods like .map(), .filter()
✅ Anonymous FunctionExpression	✅ Good	                        When you need to write the logic directly in the call
✅ Named Function Expression	    👍 Good in some cases	         When the function needs to call itself (recursion) or for better debugging
✅ Function Declaration (reused)	✅ Valid	                        When the function is defined outside and passed in by name

💡 Simple Rules
✅ 1. Use arrow functions when:
You're writing short logic

You don’t need this

You want clean, modern code

[1, 2, 3].forEach(num => console.log(num * 2));

✅ 2. Use anonymous function expressions when:
You need to run more logic in the callback

You want to keep it inline

setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

✅ 3. Use named function expressions when:
You want clearer stack traces in debugging
You need recursion inside the callback

setTimeout(function retryMessage() {
  console.log("Retrying...");
}, 1000);

✅ 4. Use function declarations (named functions) when:
You plan to reuse the callback logic in many places

function showAlert() {
  alert("Hello!");
}

document.addEventListener("click", showAlert);

❗ Avoid:
❌ Defining too many large callbacks inline — it makes code hard to read.

❌ Using arrow functions when this matters (like in object methods or classes).
*/

/*
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined

That’s because a Function Declaration is only visible inside the code block in which it resides.

Here’s another example:
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

What can we do to make welcome visible outside of if?

The correct approach would be to use a Function Expression and assign welcome to
the variable that is declared outside of if and has the proper visibility.

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

Or we could simplify it even further using a question mark operator ?:
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now

When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax.
It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};.
Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a
 conditional declaration (we’ve just seen an example), then Function Expression should be used.

In most cases when we need to declare a function, a Function Declaration is preferable,
because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task.
We’ve seen a couple of examples of that in this chapter, and will see more in the future.
*/

const welcome = (age < 18)
  ? () => { return 'Hello!' }
  : () => { return 'Greetings!' }

console.log(welcome()) // ok now
