console.log("=============Loops: while and for==========")
/*
We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.
*/

console.log("=============The “while” loop===========");
// The while loop has the following syntax:

// The while loop has the following syntax:
let condition;
while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;

// while(1) {
//     //   i++; // start from 1, 2, 3, 4, 5
//     console.log(i);
//     i++; //start from 0, 1, 2, 3, 4.
// }

while(i <= 5) {
    //  < i++; // start from 1, 2, 3, 4, 5
    // <= i++; // start from 1, 2, 3, 4, 5, 6
    console.log(i);
    i++;// < start from 0, 1, 2, 3, 4.
    //i++; // <= start from 0, 1, 2, 3, 4, 5.
}

console.log("----------------------")
let p = 3;

while (p) {
    console.log(p); //3, 2,1. it will not stop at 0 because 0 is falsy in javascript
    p--;
}

// If you want the loop to go to negative values, you can force it:
while (p >= -1) { // when i becomes 0, the condition becomes falsy, and the loop stops
    //  p--; // >= 3, 2, 1, -1, -2 //👈decrease first
    // p--;  // > 3, 2, 1, -1.
  console.log(p);// 👈 print first ---------------// 👈 then print
  p--;             // 👈 then decrease
   //>= 3, 2, 1, 0, -1.
   //> 3, 2, 1, 0
}

console.log("===============The “do…while” loop============");
// The condition check can be moved below the loop body using the do..while syntax:
do {
  // loop body
} while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
/* 
For do....while whether the condition is true or false it will execute
do...while will always run the loop body at least once, even if the condition is false.

This is because it checks the condition after the first execution.
*/

/*
This form of syntax should only be used when you want the body of the loop to 
execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.
*/

/*
No, it's not always a good design for a condition to be falsy and it still execute
But in some cases, it's the perfect tool for the job.
*/

/*
🎯 When do...while is a good design:
Use do...while only when you are sure the code must run at least once, even if the condition is false at first.

✅ Example:
Ask a user for input at least once, then repeat only if needed:
*/

// That run once means whether the condition is truthy or falsy, it will still show

// If the condition is true, number will be counting and it will show the body 
// but if it is false, the number will not count but show the body

let password;

do {
  password = console.log("Enter your password:");
} while (false);


let size = 0;
do {
  console.log( size ); // print first
  size++;               // then increase
} while (size < 3);

/*
✅ Are while and do...while loops recommended?

Yes, they are part of JavaScript and perfectly valid to use.
But in modern coding, they're used less often for a few reasons:

🔁 Why some developers avoid while and do...while:

Reason	                                          Explanation
❌ Easier to make infinite loops                	If you forget to update the condition (like i++), the loop can run forever.
❌ Less readable	                                Compared to for loops or newer tools like forEach, it can be harder to read.
❌ do...while runs at least once	                This can be risky if you don’t want code to run when the condition is already false.

✅ When is it okay (or good) to use them?

🔸 Use while:
When you don’t know how many times you need to loop.
*/

console.log("============The “for” loop=======");
// The for loop is more complex, but it’s also the most commonly used loop.
/* for (begin; condition; step) {
   // ... loop body ...
 }
*/

let q;
for (let q = 0; q < 3; q++) { // shows 0, then 1, then 2
  console.log("q:", q);
//   iteration: 0
//   iteration: 1
//   iteration: 2
}

console.log(q);

console.log("-------------explanation--------");
// Here’s exactly what happens in our case:

// for (let i = 0; i < 3; i++) alert(i)

// run begin
// if condition → run body and run step
if (q < 3) { console.log(q); q++ }
// if condition → run body and run step
if (q < 3) { console.log(q); q++ }
// if condition → run body and run step
if (q < 3) { console.log(q); q++ }
// ...finish, because now i == 3

console.log("==================Skipping parts=========");
/*
❌ When It's Bad Design

When it makes the loop hard to read or understand.

When another developer can't quickly see the start, stop, and step.

When using while or do...while would be more readable.

✅ Best Practice

If skipping a part helps clarity, simplicity, or solves a specific problem, it’s acceptable.

 But if it makes your loop confusing, it's better to stick to the full for (init; condition; increment) form.
/*


/*
Any part of for can be skipped.

For example, we can omit begin if we don’t need to do anything at the loop start.
*/

let skip = 0; // we have i already declared and assigned

for (; skip < 3; skip++) { // no need for "begin"
  console.log( skip ); // 0, 1, 2
}

// ✅ When Skipping Parts is a Good Design
// Skipping initialization or increment — when it's handled outside the loop:
let part = 0; // we have i already declared and assigned

for (; part < 3; part++) { // no need for "begin"
  console.log( part ); // 0, 1, 2
//    i++; // increment manually
}

// Skipping condition — for infinite loops with manual breaks:
for (let newNum = 0;; newNum++) {
  if (newNum === 3) break;
  console.log(newNum);
}

// Skipping all parts — for an infinite loop (⚠️ Use with caution):
for (;;) {
  console.log("Runs forever unless broken");
  break;
}

console.log("=================Breaking the loop=============");
for (let w = 0; w < 10; w++) {
    console.log(w); //0, 1, 2, , 4, 5
  if (w === 5) {
    break; // stop the loop when i is 5
  }
//   console.log(w); //0, 1, 2, 3, 4
}

/*
❗ Why It Becomes "Disabled" (Ignored):
When break is used, it immediately exits the loop.

So if you put any code after break inside the same block, that code is ignored and will never run.
*/
// let total = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) {
//     break; // (*)
//   } 
//   total += value;
// }
// alert( 'Sum: ' + total );

console.log("=========Continue to the next iteration=========");
// The continue directive is a “lighter version” of break. 
// It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

/*
👉 if (i % 2 == 0)
This means:

"If i is divisible by 2 with no remainder"

🔹 % is called the modulus or remainder operator.
It gives you what’s left after division.

✅ Examples:

0 % 2 = 0   → even
1 % 2 = 1   → odd
2 % 2 = 0   → even
3 % 2 = 1   → odd
4 % 2 = 0   → even

i % 2 == 0 → i is an even number

i % 2 != 0 → i is an odd number

0 is even
2 is even
4 is even
6 is even
8 is even
*/

/*
✅ When continue is a good design:
Use continue when you want to skip one loop step without stopping the whole loop.

This is useful when:

You want to skip bad data

You want to avoid doing something for a special value

⚠️ When continue is not a good design:
If it makes your code hard to read

If you're using too many continues inside nested loops

If there's a cleaner way using if/else

✅ Tip for Beginners:
Before using continue, always ask:

“Can I do this more clearly using if and skipping code naturally?”

If yes, skip continue. If no, it’s okay to use it.
*/

/*
 i % 8 this means remainders
 i % 8 === 0 means the even numbers that does not have remainder
 i % 8 ===1 means the one that will divide but have remainder 1
*/

for (let i = 0; i <= 10; i++) {

  // if true, skip the remaining part of the body
//   console.log(i); //just print: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  if (i % 8) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

console.log("========The continue directive helps decrease nesting=====");
/*
From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.

But as a side effect, this created one more level of nesting (the alert call inside the curly braces).
 If the code inside of if is longer than a few lines, that may decrease the overall readability.
*/

for (let g = 0; g < 10; g++) {

  if (g % 2 === 0) {
    console.log( g );
  }

}

console.log("==========No break/continue to the right side of ‘?’=======");
/*
Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. 
In particular, directives such as break/continue aren’t allowed there.
*/

/*
Yes, you're getting an error because continue can only be used inside a loop like for, while, or do...while.
 It cannot be used inside an if...else block on its own unless it's inside a loop.

 if (i > 5) {
  alert(i);
} else {
  continue;
}

(i > 5) ? alert(i) : continue; // continue isn't allowed here

…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.
*/

console.log("===========Labels for break/continue==========");
// Sometimes we need to break out from multiple nested loops at once.

// For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):

/*
🤔 What’s Happening Here?
You are using a nested loop, meaning:

The outer loop (c) runs 3 times: when c = 0, 1, and 2.

For each value of c, the inner loop (j) also runs 3 times: j = 0, 1, 2.

So in total, console.log(j) will run 3 × 3 = 9 times.

✅ Output:

0
1
2
0
1
2
0
1
2

for (let c = 0; c < 3; c++) {
    // console.log(c)

  for (let j = 0; j < 3; j++) {
    console.log(j)

    // what if we want to exit from here to Done (below)?
  }
}
*/


/*
✅ Is using labels in JavaScript a good design?
The short answer is:

No, using labels is generally not considered a good design, except in rare, special cases (like breaking out of nested loops).

💡 Why labels are usually discouraged:
Hard to read and maintain:

Code with labels becomes harder for others (or your future self) to understand.

It can feel like a "goto" statement, which is usually bad practice.

You can often solve it without labels:

By using a function or a flag variable.

For example, return from a function instead of break label.

✅ When it's okay to use labels:
When you’re breaking out of multiple nested loops, and using labels makes your code cleaner than workarounds.

🧠 Recommended design practice:
Use labels only when needed and with clear comments.

Otherwise, stick to simpler logic like:

Using return in functions

Breaking just the inner loop

Using boolean flags to exit loops

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/

outer: for (let c = 0; c <= 5; c++) {
    // if(c !== 0) {
    //   console.log(c)
    // }
  crack: for (let j = 0; j < 5; j++) {
    if(c % 2) {
      continue outer;
    }else if(j % 2) {
        continue crack;
    }
    console.log(`c: ${c}.......j: ${j}`);  

    // what if we want to exit from here to Done (below)?
  }
}


console.log("=========Tasks=========");
let cloth = 3;

while (cloth) {
//   console.log( cloth-- ); // 3, 2, 1
console.log(cloth); // 3, 2, 1
cloth --;
// console.log(cloth); // 2, 1, 0
}


console.log("========Comparison on post-increment and pre-increment=====");
let check = 0;
while (++check < 5) console.log("pre-increment: ",  check ); // 1, 2, 3, 4 before check


let club = 0
while (club++ < 5) console.log("post-increment: ",  club); // 1, 2, 3, 4, 5 after check

// postfix form

// The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
console.log("for loop")
for (let club = 0; club < 5; club++) {
  console.log("postfix:", club) // 1, 2, 3, 4
};

for (let club = 0; club < 5; ++club) {
  console.log("pre-fix:", club) // 1, 2, 3, 4
};


console.log("=========")
let stu = 0;
while (stu < 3) {
//   console.log( `number ${stu}!` ); // 0, 1, 2
  stu++;
  console.log(stu) // 1, 2, 3
}


// let text;
// let visitor = +prompt("loop which prompts for a number greater than 100.", ""); //convert to number because of  + sign

// if(!visitor) {
//     text = " cancels the input/enters an empty line.";
// }else if(visitor > 100) {
//     text = "Great!";
// }else {
//     text = "The loop must ask for a number until either the visitor enters a number greater than 100";
// };

// alert(text);
console.log("--------Prime number--------")

for(let prime = 2; prime <= 10; prime++) {
  let isPrime = true;

  for(let i = 2; i < prime; i++) {
    // console.log(prime2);
    if(prime % i === 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime) {
    console.log(prime);
  }
}

// OR
console.log("--------------OR--------")
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor...and the code is false because j < 2
    if (i % j === 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}


