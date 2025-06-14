// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

console.log("===============|| (OR)===========");
/*
In classical programming, the logical OR is meant to manipulate boolean values only. 
If any of its arguments are true, it returns true, otherwise it returns false.
*/

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

/*
If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false:
*/

if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

// For example:

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

// We can pass more conditions:
// NB: It is not a good design to use to much logical operator e.g(||)
let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
  console.log( 'The office is opened.' ); // it is the weekend
}

console.log("===============Short-circuit evaluation.==========");
/*
Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.
*/

// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

console.log(true || "not printed"); // true
console.log(false || "printed"); // printed

console.log("============&& (AND)============");
// In classical programming, AND returns true if both operands are truthy and false otherwise:
console.log( true && true ); // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// An example with if:
let hour2 = 12;
let minute = 30;

if (hour2 === 12 && minute === 30) {
  console.log( 'The time is 12:30' );
}

// Just as with OR, any value is allowed as an operand of AND:
if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}else {
    console.log("Nothing!")
}

// How && works

// 🔹 It returns:
// The first falsy value it finds

// Or, if all are truthy, it returns the last truthy value

// ➡️ All are truthy, so it returns the last one: true.

console.log(1 && "hello" && true);  // true


// 🔹 && (AND) – If all values are falsy, it returns the first falsy it finds.

// null is falsy

// It’s the first falsy, so && stops there and returns null

console.log(null && 0 && undefined); // null

console.log("hello" && false && null); // false

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// How || works

// All are bad, so it gives you the last one: undefined
console.log(0 || null || undefined); // undefined

// All are good, so it gives you the first one: divine
console.log("divine" || 5 || true); // divine

// NB: Precedence of AND && is higher than OR ||

/*
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
*/

/*
💡 Operator Precedence
In JavaScript:

&& runs before ||

You can group them with parentheses () to change how they work
*/

/*
Why?

First: false && false → false

Then: true || false → true

✅ So it prints true
*/

let result1 = true || false && false;
console.log(result1); // true

// ✅ Example 2: With parentheses

/*
Why?

First: true || false → true

Then: true && false → false

✅ So it prints false
*/
let result2 = (true || false) && false;
console.log(result2); // false

// ✅ Example 3: With numbers

/*
Why?

1 && 2 → both are truthy → returns last one → 2

0 || 2 → 0 is falsy → returns 2

✅ So it prints 2
*/
let result3 = 0 || 1 && 2;
console.log(result3); // 2

console.log("=======! (NOT)====");
console.log( !true ); // false
console.log( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false


// using double exclamation marks (!!) in JavaScript is considered a good design when you want to clearly convert a value to a boolean.
// The !! (double NOT) converts any value to its boolean equivalent:

/*
This works because:

First !value turns it into the opposite boolean

Second ! reverses it again to the actual boolean value
*/

/*
💡 Why is it good?
✅ Clear intention: It clearly says, “I want a boolean!”

✅ Shorter than using Boolean(value)

✅ Used a lot in real-world JavaScript projects

*/

/*
🚫 When NOT to use:
Don’t overuse it where it makes code hard to read

In some beginner projects, Boolean(value) might be more readable

*/

console.log(!!"hello");   // true (non-empty string)
console.log(!!0);         // false (0 is falsy)
console.log(!!123);       // true (number ≠ 0)
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true (object is truthy)
console.log(!![]);        // true (array is truthy)

// There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

console.log("=====================Task=============");
console.log( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 2

console.log( 1 && null && 2 ); // null
// alert( alert(1) && alert(2) ); // 1 and undefine and the answer is undefined

console.log( null || 2 && 3 || 4 ); // 3

let ageMate = 86;

if (ageMate >= 14 && ageMate <= 90) {
    console.log("That's good!")
}else {
    console.log("Nothing!");
}

/*
🔹 JavaScript Truthy/Falsy Recap
Falsy values: false, 0, "", null, undefined, NaN

Truthy: almost everything else, like -1, 1, "abc", [], {}
*/

if (-1 || 0) {
    console.log("First"); // -1
}
if (-1 && 0) {
    console.log("Second"); // 0
}
if (null || -1 && 1) {
    console.log( 'Third' ); // 1
}

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}