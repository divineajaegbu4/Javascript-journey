console.log("============Functions========");
// We’ve already seen examples of built-in functions, like alert(message), 
// prompt(message, default) and confirm(question). But we can create functions of our own as well.

console.log("===========Function Declaration=========");
function showMessage() {
  console.log( 'Hello everyone!' );
}

showMessage();
showMessage();

/*
The function keyword goes first, then goes the name of the function, 
then a list of parameters between the parentheses (comma-separated,
 empty in the example above, we’ll see examples later) and finally 
 the code of the function, also named “the function body”, between curly braces.
*/

function name(parameter1, parameter2, ... parameterN) {
 // body
}

/*
🎯 Which One Is Better Design?
✅ Best Practice: Prefer Local Variables
Local variables are safer and easier to manage.

They don’t pollute the global scope.

They make your functions independent and reusable.

Easier to debug and test.

--------------------------------------------------------
❌ Avoid Global Variables When Possible
Global/outer variables can be overwritten accidentally.

They create hidden dependencies.

They make your code harder to maintain.


------------------------------------------------------------
💡 Summary
✅ Use local variables by default.

🧼 Avoid global variables unless absolutely necessary.

📦 If many parts of the app need shared data, use modules or config files to organize them.
*/

console.log("==========Local variables===========");
// A variable declared inside a function is only visible inside that function.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function

console.log("========Outer variables=========");
// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage2() {
  let message = `Hello ${userName}`;
  console.log(message);
}

console.log("******* ", userName);
showMessage2(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.

// For instance:


/*
The outer variable is only used if there’s no local one.

If a same-named variable is declared inside the function then it shadows the outer one. 
For instance, in the code below the function uses the local userName. The outer one is ignored:
*/

/*
Warning: Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables.
 Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/


function showMessage3() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log("Edited", message);
}

console.log( userName ); // John before the function call

showMessage3();

console.log( userName ); // Bob, the value was modified by the function

console.log("==========Parameters=======");
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // parameters: from, text
  console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

/*
Here’s one more example: we have a variable from and pass it to the function. 
Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
*/

// When a value is passed as a function parameter, it’s also called an argument.

/*
The difference blw parameter and argument:
from and text is the parameter (placeholder)
while
Ann and Hello is the argument (actual value)
*/
function showMessage5(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  console.log("***", from + ': ' + text );
}

let from = "Ann";

showMessage5(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log( from); // Ann

console.log("=====Default Values=====");

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage5("Ann");

// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

/*
Using default value is a good design.
It is a good design when use as Optional, non-critical value.
----------------------------------------
It is not a good design for:
1. Important requirement input
2. Default hides a bug or mistake
3. For too many default params but better with objects.

NB: It is not good to use object when they are only 1-2 simple values.
Objects is used when they are 3+ parameters
*/

/*
Best Design: Don't pass anything
It is a good design for default value to not pass anything. let the default value
apply automatically when the value is not provided

Less clean: Passing undefined manually
still works but less clean
*/
function showMessage6(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage6("Ann"); // Ann: no text given

// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage6("Ann", undefined); // Ann: no text given

console.log("==========Alternative default parameters=========");
// We can check if the parameter is passed during the function execution, by comparing it with undefined:

/*
🧠 If you're not using default parameters directly in your function definition, 
there are a few alternative ways to set default values in JavaScript.

// Modern alternative:
1. function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  console.log("Hello, " + name);
}

// Old alternative (not recommended):
function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name);
}

*/

function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  console.log(text);
}

showMessage(); // empty message

// …Or we could use the || operator:
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';

}

console.log("=============Returning a value============");
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3

function checkAge(age) {
  if (age >= 18) {
    return confirm("Good!");
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  console.log( "Showing you the movie" ); // (*)
  // ...
}

showMovie(30);

// With return, you avoid the extra nesting - which is cleaner

// Cleaner example
function testing(name) {
    if (!name) { // Early exit if name is null/undefine
        return
    };

    // Continue only if name exists
    console.log(`This is my real name ${name}`);
}

testing(undefined);
testing("Divine");

// A function with an empty return or without it returns undefined

// If a function does not return a value, it is the same as if it returns undefined:

function doNothing() { /* empty */ }

console.log( doNothing() === undefined ); // true

// An empty return is also the same as return undefined:

console.log("=======Never add a newline between return and the value======");
// return
//  (some + long + expression + or + whatever * f(a) + f(b))

/*
If we want the returned expression to wrap across multiple lines, 
we should start it at the same line as return. Or at least put the opening parentheses there as follows:
*/

// And it will work just as we expect it to.

// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )


console.log("========Naming a function========");
/*
Functions are actions. So their name is usually a verb. It should be brief,as accurate as 
possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

🧠 Why function names matter
Functions do something — they are like actions or behaviors.
That’s why their names should be verbs (action words).

📌 Tips for Naming Functions
1. Start with a verb
Like get, set, check, show, calculate, send, fetch, validate, create etc.

2. Be specific
Tell exactly what the function does.

3. Avoid vague names
Don’t use names like handleStuff(), doThing(), or data().
*/

/*
One function – one action

✨ A function should do exactly what its name says — nothing more, nothing less.

Let me explain this clearly, like you're a beginner, with simple examples and why it's important.

✅ 1. What does it mean?
If you name a function getAge(), it should only get the age, not also show an alert or write something to the screen.

📌 The function name = its job. Just one job.

.

💥 Why is this important?
Because when your function does only one clear thing, then:

Your code becomes easier to read 😌

Your code becomes easier to test 🧪

Your code becomes easier to reuse ♻️

Other people can understand your code quickly 👨‍💻👩‍💻

🚫 Examples of bad function design:

❌ Example 1:

function getAge() {
  let age = prompt("Enter your age");
  alert("You are " + age);  // ❌ BAD: Showing alert inside a getter
  return age;
}

This is bad because:

The name says: "getAge" → it should only return age.

But it also shows an alert, which is an extra action.

❌ Example 2:

function createForm() {
  let form = document.createElement("form");
  document.body.append(form); // ❌ BAD: Directly adds it to the page
  return form;
}

Bad because:

The name says: "createForm" → it should only create the form and return it.

It should not modify the page.

❌ Example 3:

function checkPermission() {
  let allowed = true;
  if (allowed) {
    alert("Access granted"); // ❌ BAD: showing alert
  }
  return allowed;
}
If the function is called checkPermission, it should only return true/false — not show messages.


✅ How to fix it?

✅ Separate each action into its own function:

function getAge() {
  return prompt("Enter your age");
}

function showAge(age) {
  alert("You are " + age);
}

function run() {
  let age = getAge();
  showAge(age);
}
You can call both when needed, but each does one thing clearly.

🔥 Summary
Rule	                            Why it's good
One function =                   One clear job	Easier to read, debug, reuse
Function name =                  Action it performs	No surprises, better team collaboration
Don’t mix alerts/UI inside  =     Keeps logic and display separate
pure logic functions	
*/

/*
🧠 What are "ultrashort function names"?
Ultrashort function names are very short — often just one letter, like $ or _.

These are special shortcuts often used in libraries or frameworks that 
run the same function many times. So instead of writing a long name again and again, they use a very short name.

📌 Examples of Ultrashort Function Names

✅ jQuery Example:

 $ is a shortcut for the jQuery function
$("h1").hide();

$ is actually a function.

Instead of writing something long like jQuery.selectElement("h1").hide(), they use $() to make it shorter.

This is very useful when writing many small commands.

✅ Lodash Library:

_ is the main Lodash object
_.map([1, 2, 3], x => x * 2);  // [2, 4, 6]

_ is used instead of writing something longer like lodash.map(...).

It makes code short and fast to write.

⚠️ But why is this not always recommended?
Ultrashort names like $ or _ are fine only in special cases — like when:

You use them many times

Everyone on the team knows what they mean

They come from a popular library (like jQuery or Lodash)

But for normal functions, this is a bad idea.

🧠 Summary Table
Use ultrashort name like $, _ only when:
✅ It's used very frequently
✅ It's a common shortcut from a popular library
❌ Not for normal functions in your own code
✅ Normal functions should have clear, short names

💡 Rule of Thumb:
❗ Use ultrashort names only for tools/helpers you use all the time.
📘 For most functions, use names that are short but meaningful.

*/

console.log("=======Functions == Comments=======");
/*Functions should be short and do exactly one thing. If that thing is big, maybe 
it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, 
but it’s definitely a good thing.*/

/*
The first variant uses a label:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). 
Sometimes people refer to such code as self-describing.

So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.
*/

/*
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, 
not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result 
than a function which gets no parameters, but modifies outer variables as a side effect.
*/

console.log("=========Tasks========");
// They do the same thing
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return console.log('Did parents allow you?');
  }
}

// This one is more a good design
function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return 'Did parents allow you?';
};

// Using tenary operator ? or || operator
function checkAge3(age) {
  return (age >= 18) ? true : false;
}

/*
If age > 18 → ✅ true → confirm is skipped.

If not → ask for confirmation → result becomes the return value.
*/
function checkAge4(age) {
  return (age > 18) || console.log('Did parents allow you?');
}
console.log(checkAge(20));
console.log(checkAge(20));
console.log(checkAge3(18));
console.log(checkAge4(10));

// Recommended and for real-world project
function pow(x, n) {
 return x ** n;
}

console.log(pow(2, 3)) // 8
console.log(pow(1, 100));
console.log(pow(2, 6));

// For learning of how power works in javascript
function pow2(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
    console.log("result:", result);
  }

  return result;
}



// if (n < 1) {
// console.log(`Power ${n} is not supported, use a positive integer`);
// } else {
//   console.log( pow2(x, n) );
// }

console.log(pow2(2, 6));
console.log(pow2(3, 4)); // means 3 * 3 * 3 * 3 = 81

// i = 1 → result = 3 * 3 = 9
// i = 2 → result = 9 * 3 = 27
// i = 3 → result = 27 * 3 = 81