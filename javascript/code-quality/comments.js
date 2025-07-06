/**
 * Adds two numbers together.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

console.log(add);


console.log("=========Bad comments=======");
/*
But in good code, the amount of such “explanatory” comments should be minimal. Seriously, 
the code should be easy to understand without them.

There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.
*/

// Sometimes it’s beneficial to replace a code piece with a function, like here:

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}

showPrimes(20);

// The better variant, with a factored out function isPrime:

// Now we can understand the code easily. The function itself becomes the comment. Such code is called self-descriptive.

console.log("==============")

function showPrimes2(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}


showPrimes2(20);

/*
In reality, we can’t totally avoid “explanatory” comments. There are complex algorithms.
 And there are smart “tweaks” for purposes of optimization. But generally we should try to keep the code simple and self-descriptive.
*/

/*
Summary
An important sign of a good developer is comments: their presence and even their absence.

Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.

Comment this:

Overall architecture, high-level view.
Function usage.
Important solutions, especially when not immediately obvious.
Avoid comments:

That tell “how code works” and “what it does”.
Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.
Comments are also used for auto-documenting tools like JSDoc3: they read them and generate HTML-docs (or docs in another format).



Comments that explain the solution are very important. They help to continue development the right way
*/

console.log("===========Good comments========");
