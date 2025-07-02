/*
Programming languages that allow such things, such as JavaScript, are called
 “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
*/

let user_name = "Divine";
user_name = 13455565;

console.log(user_name);

console.log("==========Infinity=================");

/*
there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
*/

/*
. Infinity is not an error - it's valid
. Dividing by 0 crashes JS. No crash-it gives infinity means too big or endless number
. It's a number.
*/
console.log("Infinity:", 1 / 0); // Infinity

console.log(Infinity); // Infinity
// console.log(Number.)

console.log("================NaN=============");

/*
NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
NaN means not a number.
*/

console.log("not a number divide by 2:", "not a number" / 2); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
console.log("typeof:", typeof NaN);

console.log("=================Number.isNaN(value)=================");
// Number.isNaN(value): it checks if a value is exactly NaN, and returns true or false.
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("divine" / 5));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(1 / 0));

// true (because "hello" becomes NaN when converted to number)
console.log("isNaN: ", isNaN("hello"));
// false (it's a string, not the real NaN). So, Number.isNaN is stricter and safer.
console.log("Number.isNaN: ", Number.isNaN("hello"));

/*
  When to use Number.isNaN(value)?
  . You want to be 100% sure the value is really the special NaN value.
  . You're avoiding bugs caused by isNaN() being too loose.
*/

console.log("============BigInt==============");

/*
BigInt is a special Javascript type used to store very
large integers - bigger than what normal numbers (Number) can handle.
*/

// eslint-disable-next-line no-loss-of-precision
console.log("Number + 1: ", 348409830980980982098402982982082309 + 1);
// eslint-disable-next-line no-loss-of-precision
console.log("Number + 2: ", 348409830980980982098402982982082309 + 2);

const bigNum =
  482309842098203982082027482748275892502829304820948204982092n + 5n;

console.log(bigNum);

// You can't mix BigInt and normal Number:
const a = 40n;
const b = 5;

// console.log("Mix bigInt with normal Number: ", a + b);

// To converts one to  bigInt
console.log("convert b to bigInt: ", a + BigInt(b));

console.log("=============String==================");
const str = "Hello";
const str2 = "Single quotes are ok too";
const phrase = `can embed another ${str} and ${str2}`;

console.log(phrase);

/*
In Javascript there are three types of Quotes:
1. Double quote: "Hello";
2. Single quote: 'Divine';
3. Backticks: `Chisom`;
*/

console.log("=============Boolean===============");
// The boolean type has only two values: true and false.
const nameFieldChecked = true; // yes, name field is checked
const ageFieldChecked = false; // no, age field is not checked

console.log(nameFieldChecked);
console.log(ageFieldChecked);

// Boolean values also come as a result of comparisons:
const isGreater = 4 > 1;

console.log(isGreater); // true (the comparison result is "yes")

console.log("===========null===============");
// null is just a special value which represents “nothing”, “empty” or “value unknown”.
// Is a good design to assign null
const emptyString = "";
console.log(typeof emptyString);

const emptyAge = null;
console.log(emptyAge);

console.log("================undefined================");
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:

let notAssigned;
console.log(notAssigned);

let assignedAge = 100;

/*
…But we don’t recommend doing that. Normally, one uses null to assign
an “empty” or “unknown” value to a variable, while undefined is reserved
as a default initial value for unassigned things.
*/

// change the value to undefined
// Is not a good design to assign undefined because javascript will assign it automatically.
assignedAge = undefined;

console.log(assignedAge); // "undefined"

console.log("=================Objects and Symbols===============");
/*
Objects are complex data structures used to store collections of values
and functions.
*/

// An object is like a bag that holds properties and methods

const person = {
  name: "Divine",
  age: 22,
};

console.log(person);

/*
Primitive types are the most basic types in Javascript.
They store simple, single values and are not objects
e.g number, string, boolean, null, undefined, bigInt, symbol etc.
*/

const symbol = Symbol("id");
console.log(symbol);

console.log("===============typeof operator=============");
/*
The typeof operator returns the type of the operand.
 It’s useful when we want to process values
 of different types differently or just want to do a quick check.
*/
// e.g
//  Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
console.log(typeof undefined);       // "undefined"
console.log(typeof 0);               // "number"
console.log(typeof 10n);             // "bigint"
console.log(typeof true);            // "boolean"
console.log(typeof "foo");           // "string"
console.log(typeof Symbol("id"));    // "symbol"
console.log(typeof Math);            // "object"
console.log(typeof null);            // "object"
console.log(typeof alert);           // "function"


