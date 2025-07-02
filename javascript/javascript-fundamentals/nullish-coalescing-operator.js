console.log("======================Nullish coalescing operator '??'=====")
// we’ll say that a value is “defined” when it’s neither null nor undefined.

// 🧠 What does ?? mean?

// It returns the right-hand value only if the left-hand value is null or undefined.

/*
This means:

If a is NOT null or undefined, result = a

If a IS null or undefined, result = b
*/

const result5 = a ?? b

// ✅ Examples:

// ✅ When to use ???
// Use ?? when you only want to give a default if a variable is truly missing (null or undefined):

// 💡 So ?? only checks for null and undefined, not other falsy values like 0, false, or "".

console.log(null ?? 'default') // → "default"
console.log(undefined ?? 'default') // → "default"
console.log(0 ?? 'default') // → 0
console.log(false ?? 'default') // → false
console.log('' ?? 'default') // → ""

// The common use case for ?? is to provide a default value.
let user

console.log(user ?? 'Anonymous') // Anonymous (user is undefined)

const user1 = 'John'

console.log(user1 ?? 'Anonymous') // John (user is not null/undefined)

console.log('==============Comparison with ||=============')

//  in the code above we could replace ?? with || and still get the same result:

const firstName1 = null
const lastName1 = null
const nickName1 = 'Supercoder'

// shows the first defined value:
console.log(firstName1 ?? lastName1 ?? nickName1 ?? 'Anonymous') // Supercoder

const firstName2 = null
const lastName2 = null
const nickName2 = 'Supercoder'

// shows the first defined value:
console.log(firstName2 || lastName2 || nickName2 || 'Anonymous') // Supercoder

/* The important difference between them is that:

 || returns the first truthy value.
 ?? returns the first defined value.
*/

const height = 0

console.log(height || 100) // 100
console.log(height ?? 100) // 0

console.log('===========Precedence==========')
// The precedence of the ?? operator is the same as ||. They both equal

// So we may need to add parentheses in expressions like this:

const height1 = null
const width = null

// important: use parentheses
const area = (height1 ?? 100) * (width ?? 50)

console.log(area) // 5000

// Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.
// without parentheses
const area1 = height1 ?? 100 * width ?? 50

console.log(area1)

// ...works this way (not what we want):
const area2 = height1 ?? (100 * width) ?? 50
console.log(area2)

console.log('===================Using ?? with && or ||===============')

/*
Due to safety reasons, JavaScript forbids using ?? together with && and || operators,
unless the precedence is explicitly specified with parentheses.
*/

// The code below triggers a syntax error:

// let z = 1 && 2 ?? 3; // Syntax error

// Use explicit parentheses to work around it:

const z = (1 && 2) ?? 3 // Works

console.log(z) // 2

console.log('============Summary=========')
/*
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.
*/
