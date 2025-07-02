// The three most widely used type conversions are to string, to number, and to boolean.
console.log('===============String Conversion============')
let value = true
alert(typeof value) // boolean

value = String(value) // now value is a string "true"
alert(typeof value) // string

console.log('===============Number Conversion============')
const str1 = '123'
alert(typeof str1) // string

const num1 = Number(str1) // becomes a number 123

alert(typeof num1) // number

const invalidNum = Number('an arbitrary string instead of a number')

console.log(invalidNum) // NaN, conversion failed
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(NaN)) // NaN
console.log(Number('abc')) // NaN

// Explicit conversion is javascript is recommended and also a good design

/*
When to use typeof
1. Checking if value is string, number, boolean, undefined, or function
2. Checking if a variable exists before accessing it
3. Debugging the type of a variable

When not to use typeof
. Checking complex types like arrays, null, or objects instead use better tools.
*/

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

console.log('=====================Boolean Conversion===================')
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false

console.log(Boolean('hello')) // true
console.log(Boolean('')) // false

/*
Please note: the string with zero "0" is true

Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.
*/

console.log(Boolean('0')) // true
console.log(Boolean(' ')) // spaces, also true (any non-empty string is true)

// 0, null, undefined, NaN, ""	= false
// any other value = true
