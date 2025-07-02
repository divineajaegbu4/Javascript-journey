console.log('=============Arrow functions, the basics==========')
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// Arrow functions can be used in the same way as Function Expressions.

const addition = (a, b) => a + b

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(addition(1, 2)) // 3

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
const double = n => n * 2
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)) // 6

// If there are no arguments, parentheses are empty, but they must be present:

const sayHello = () => alert('Hello!')

sayHello()

console.log('==========Multiline arrow functions=========')
/*
Sometimes we need a more complex function, with multiple expressions and statements.
In that case, we can enclose them in curly braces. The major difference is that
curly braces require a return within them to return a value (j vust like a regular function does).
*/

const sum1 = (a, b) => { // the curly brace opens a multiline function
  const result = a + b
  return result // if we use curly braces, then we need an explicit "return"
}

console.log(sum1(1, 2)) // 3

console.log('===========Rewrite with arrow function=======')
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

// NB: Arrow function are not hoisted like function expression

const test = (question, yes, no) => {
  if (typeof (question) === 'string') {
    yes()
  } else {
    no()
  }
}

function agree () {
  console.log('You agreed!')
}

function cancel () {
  console.log('You canceled the execution')
}

test('Do you agree?', agree, cancel)
