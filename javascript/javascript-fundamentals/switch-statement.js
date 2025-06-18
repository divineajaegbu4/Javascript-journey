console.log("==============The switch statement=========");
// A switch statement can replace multiple if checks.

// It gives a more descriptive way to compare a value with multiple variants.

// The switch has one or more case blocks and an optional default.


// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// An example

// If there is no break then the execution continues with the next case without any checks.
let a = 7;
let text;

switch(a) {
    case 3:
       text = "Too small";
       break;
    case 4:
        text = "Correct!";
        break;
    case 5:
        text = "Too big";
        break;
    default:
        text = "I don't know the exact number!";
}

console.log(text);

console.log("==========Grouping of “case”=========");

// Several variants of case which share the same code can be grouped.

// For example, if we want the same code to run for case 3 and case 5:

/*
For grouped case:


  case 7: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

if (a === 7 || a === 5) {
  alert('Wrong!');
  alert("Why don't you take a math class?");
}

To switch && in the switch statement

🔄 You want to replace this with a switch statement?
A switch statement only checks one value at a time, not two.

So to use a switch, we have to combine the two values into one string or value. For example:


🧠 Explanation:
Instead of checking color AND shape separately...

We combine both into one string like "red-circle" and use switch to compare it.

This way, we’re still doing the same logic, just in a format switch understands.

✅ Is this a good design?
✔️ Yes — if you're checking a combination of fixed values.

❌ But if the logic gets too complex (many values or functions), then using if with && might be simpler and clearer.


let color = "red";
let shape = "circle";
let combination = color + "-" + shape; // "red-circle"

switch (combination) {
  case "red-circle":
    console.log("It's a red circle!");
    break;

  case "blue-square":
    console.log("It's a blue square!");
    break;

  default:
    console.log("Unknown object");
}

*/


switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 7: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

console.log("========Tasks=========");
// Rewrite the "switch" into an "if"

// switch (browser) {
//   case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log( 'Okay we support these browsers too' );
//     break;

//   default:
//     console.log( 'We hope that this page looks ok!' );
// }

/*
Please note: the construct browser == 'Chrome' || browser == 'Firefox' … is split into multiple lines for better readability.

But the switch construct is still cleaner and more descriptive.
*/

let browser = "Opera";

if(browser === "Edge") {
    console.log( "You've got the Edge!" );
}else if(browser === "Chrome"
    || browser === "Firefox" 
    || browser === "Safari"
    || browser || "Opera") {
    console.log( 'Okay we support these browsers too' );
}else {
    console.log( 'We hope that this page looks ok!' );
}

// Rewrite "if" into "switch"

// Rewrite the code below using a single switch statement:

/*
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

/*
Please note: the break at the bottom is not required. But we put it to make the code future-proof.

In the future, there is a chance that we’d want to add one more case, for example case 4. 
And if we forget to add a break before it, at the end of case 3, there will be an error. So that’s a kind of self-insurance.
*/

let num = +prompt('a?', '');

switch(num) {
    case 0:
       console.log(0);
    break;

    case 1: 
      console.log(1);
      break;

    case 2:
    case 3:
        console.log("2, 3");
        break;

    default:
        console.log("Infinite!");
}

