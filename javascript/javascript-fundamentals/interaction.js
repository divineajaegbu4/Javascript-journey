// Interaction: alert, prompt and confirm
console.log('================alert===============')
alert('Hello')

console.log('===================prompt===============')
// result = prompt(title, [default]);
/*
title
The text to show the visitor.

default
An optional second parameter, the initial value for the input field.
*/

// [] it means optional

const agePrompt = prompt('How old are you?')

alert(`You are ${agePrompt} years old!`) // You are 100 years old!

/* Warning: In IE: always supply a default
The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.
*/

console.log('====================confirm================')
const isBoss = confirm('Are you the boss?')

alert(isBoss)

const wantsToDelete = confirm('Are you sure you want to delete this?')
if (wantsToDelete) {
  alert('Item deleted. ')
} else {
  alert('Item cancled! ')
};

/*
✔️ Good for:
Learning and simple demos

Quick tests and practice projects

Browser experiments

Teaching beginners how to interact with users

❌ Not good for:
Real-world websites or apps

User experience (UX): These popups:

Freeze the entire page (blocking)

Look outdated

Can annoy users

Mobile devices: May not work well or look good
*/

// Exercise

const first_name = prompt("What's is your first name")

if (first_name === 'Divine') {
  alert(`My name is ${first_name}`)
} else {
  alert('Wrong name')
}
