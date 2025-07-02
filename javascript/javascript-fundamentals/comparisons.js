console.log('=====================Boolean is the result============')
// All comparison operators return a boolean value:
console.log(2 > 1) // true (correct)
console.log(2 === 1) // false (wrong)
console.log(2 !== 1) // true (correct)

// A comparison result can be assigned to a variable, just like any value:
const result = 5 > 4 // assign the result of the comparison
console.log(result) // true

console.log('=====================String Comparison============')
/*
For string comparisons, from z up is greater than a down.
e.g a < b < c < d < e ..... < z.
Lowercase case is greater than uppercase in string comparison
Z < z
A < a
*/

// Not a real dictionary, but Unicode order
console.log('Z' > 'A') // true
console.log('Glow' > 'Glee') // true
console.log('Bee' > 'Be') // true

console.log('============Comparison of different types============')
// When comparing values of different types, JavaScript converts the values to numbers.
// For boolean values, true becomes 1 and false becomes 0.
console.log('2' > 1) // true, string '2' becomes a number 2
console.log('01' == 1) // true, string '01' becomes a number 1

console.log(true == 1) // true
console.log(false == 0) // true

/*
In JavaScript, non-empty strings are always truthy.

Boolean('0')   // true ✅
Boolean('hello') // true ✅
Boolean(' ')     // true ✅ (even a space is not empty)

Only the empty string "" is falsy:
Boolean('')     // false ❌
*/
const ai = 0
console.log(Boolean(ai)) // false

const bi = '0'
console.log(Boolean(bi)) // true

console.log(ai == bi) // true!

console.log('===================Loose Equality===========')
/*
loose equality(==): checks value, dosen't check type, does type conversion
strict equlity(===): checks value, checks type, doesn't do type conversion

NB: Strict equlity is a good design
loose equality can lead to bugs that are hard to catch.
*/
// A regular equality check == has a problem. It cannot differentiate 0 from false:
console.log(0 == false) // true

// The same thing happens with an empty string:
console.log('' == false) // true

console.log('===================Strict Equality===========')
// There is also a “strict non-equality” operator !== analogous to !=.

console.log(0 === false) // false, because the types are different

console.log('================Comparison with null and undefined===========')
// For a strict equality check ===
// These values are different, because each of them is a different type.

console.log(undefined === null) // false

// For a non-strict check ==

// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

console.log(undefined == null) // true

console.log('====================Strange result: null vs 0============')
// Let’s compare null with a zero:

console.log(null > 0) // (1) false
console.log(null == 0) // (2) false
console.log(null >= 0) // (3) true

/* (1) null > 0 → false
 null is converted to 0 when used in comparison.
 So: 0 > 0 → false
 ✅ That makes sense.

*/

/*
2. null == 0 → false
BUT: In loose equality, null only equals:

undefined

itself

null does not equal 0 in loose equality. That's how JavaScript is designed.
*/

/*
(3) null >= 0 → true ❗
Here’s the surprise:

null is converted to 0 again (same as in null > 0)

So: 0 >= 0 → true

😲 That’s why this is true — even though null == 0 is false
*/

console.log('================An incomparable undefined=========')
// The value undefined shouldn’t be compared to other values:

// undefined is NaN and null is undefined for loose equality
console.log(undefined > 0) // false (1)
console.log(undefined < 0) // false (2)
console.log(undefined == 0) // false (3)

console.log('===========Avoid problems=====')
/*
1.Treat any comparison with undefined/null except the strict equality === with exceptional care.
2. Don’t use comparisons >= > < <= with a variable which may be null/undefined,
unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

🧠 Basic Idea:
Don’t trust null or undefined in comparisons like >, <, >=, <= unless you're really sure what you're doing.

Because they behave in strange ways — and can give you wrong results without error.

For example:

let value = null;

if (value >= 0) {
  alert("✅ This will show!");
}

❓ But wait — is null really a number?
No! But JavaScript converts it to 0 behind the scenes.

null >= 0   // becomes 0 >= 0 → true
This might confuse you and make your code act wrong later.

✅ So what should you do instead?
🔹 Always check for null or undefined separately like this:

let value = null;

if (value === null || value === undefined) {
  alert("Value is missing!");
} else if (value >= 0) {
  alert("Value is okay!");
}

🟢 Safe Rule for Beginners:
❌ Don't do this               	✅ Do this instead
1. if (value >= 0)                 if (value !== null && value >= 0)
2. if (value == 0)                 if (value === 0)
3. if (value < 10)                 if (value !== undefined && value < 10)

Comparison operators return a boolean value.

🔐 So the safe way:
1. Use === or !==
2. Check if a value is null or undefined before doing math

*/

const value = null

console.log(value !== null && value >= 0)

console.log('=====================Task===============')
console.log(5 > 4) // true
console.log('apple' > 'pineapple') // false
/*
❓ Why is "2" > "12" true in JavaScript?
Because JavaScript does NOT convert strings to numbers when both sides are strings in a comparison like >.

Instead, it uses dictionary order (also called lexicographic or alphabetical order) — just like words in a dictionary.

"2" comes after "1" in character order (like in a phone book or dictionary)

So it thinks "2" is greater than "12"

It doesn't even check the "2" after the "1" — it already decided at the first character.
*/
console.log('2' > '12') // true
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(null == '\n0\n') // false
console.log(+'\n0\n' === null) // false
