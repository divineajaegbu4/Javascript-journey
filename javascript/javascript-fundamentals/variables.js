// A variable is a “named storage” for data.

let message
message = 'Hello' // store the string 'Hello' in the variable named message

alert(message)

// We can also declare multiple variables in one line:
/* That might seem shorter, but we don’t recommend it.
 For the sake of better readability, please use a single line per variable. */

const userName = 'John'; const age = 25; const text = 'Hello'

// The multiline variant is a bit longer, but easier to read:
const userText = 'John'
const userAge = 25
const userMessage = 'Hello'

// We can put any value in the box.
// We can also change it as many times as we want:
// When the value is changed, the old data is removed from the variable:
let boxMessage

boxMessage = 'Hello!'

boxMessage = 'World!' // value changed

alert(boxMessage)

const hello = 'Hello world!'

let helloMessage

// copy 'Hello world' from hello into message
helloMessage = hello

// now two variables hold the same data
console.log(hello) // Hello world!
console.log(helloMessage) // Hello world!

/*
Variable naming
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.
*/

let userName2
let test123

// These names are valid:
const $ = 1 // declared a variable with the name "$"
const _ = 2 // and now a variable with the name "_"

alert($ + _) // 3

// Examples of incorrect variable names:
// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name

// Non-Latin letters are allowed, but not recommended
// let имя = '...';
// let 我 = '...';

// Constants

// To declare a constant (unchanging) variable, use const instead of let:

// Const
// Capital letters is used for API_KEY
/*
  both camelCase and capital letters are good design
  when in the right place:

  . camelCase: for most variables
  . captial letters: only for important, fixed constants like
  settings, keys, limits, design systems,themes, global app settings etc.
*/
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_BLUE = '#00F'
const COLOR_ORANGE = '#FF7F00'

// ...when we need to pick a color
const color = COLOR_ORANGE
alert(color) // #FF7F00

// Name things right
// A variable name should have a clean, obvious meaning, describing the data that it stores.

/*
Spend time on naming. A good name saves you hours later.
If a name doesn’t feel right, change it early.

Variable naming is one of the most important and complex skills in programming.
. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

NB: Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.
*/

/*
Some good-to-follow rules are:

1. Use human-readable names like userName or shoppingCart.
2. Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.
3. Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.
4. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
5. Agree on terms within your team and in your mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

*/

/* Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues.
Using different variables for different values can even help the engine optimize your code.
*/
