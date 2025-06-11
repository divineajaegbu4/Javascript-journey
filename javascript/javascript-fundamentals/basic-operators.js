/*
 in the multiplication of 5 * 2 there are two operands: 
 the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
*/

// Unary means one operand e.g ++a, -a while binary means two operands e.g a + b, c * d etc.

/*
Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

console.log("===========Remainder %============");
console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4

console.log("==============Exponentiation **========");
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

console.log("==============String concatenation with binary +==============");
let s = "my" + "string";
console.log(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.
let firstName = "Divine" + 1;
console.log(firstName);
console.log(typeof firstName);

// Complex one
console.log(2 + 2 + '1' ); // "41" and not "221"

console.log('1' + 2 + 2); // "122" and not "14"

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

console.log("====================Numeric conversion, unary +============");
// No effect on numbers
let x = 1;
console.log( ++x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0


//  All signs except + convert strings to numbers.
'5' + 2     // "52"    → string
'5' - 2     // 3       → number
'5' * 2     // 10      → number
'10' / '2'  // 5       → number
'10' % 3    // 1       → number
'2' ** 3    // 8       → number

let apples = "2";
let oranges = "3";

let sumFruits = apples + oranges;

console.log( sumFruits ); // "23", the binary plus concatenates strings
console.log(typeof sumFruits);

// If we want to treat them as numbers, we need to convert and then sum them:

let mango = "2";
let banana = "3";

let sum_fruits = +mango + +banana

// both values converted to numbers before the binary plus
console.log(sum_fruits); // 5
console.log(typeof sum_fruits)

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

console.log("================Assignments===============");
// Let’s note that an assignment = is also an operator.
let g = 2 * 2 + 1;

console.log( g ); // 

// Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

console.log("===================Modify in place==============");
let n = 2;
console.log(n = n + 5);
console.log(n = n * 2);

console.log(n);

// This notation can be shortened using the operators += and *=:
let num = 2;
num += 5; // now n = 7 (same as n = n + 5)
num *= 2; // now n = 14 (same as n = n * 2)

console.log( num ); // 14

console.log("==================Increment and decrement==============");
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
// or ++counter
console.log( counter ); // 3

let counter2 = 2;
counter2--;        // works the same as counter = counter - 1, but is shorter
console.log( counter2 ); // 1

/*
Important:
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
*/

// console.log(++9);

/*
The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.

Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
*/

// Difference blw ++conuter and counter++
// counter++ = post-increment while ++counter = pre-increment

// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let age = 12;

let sameAge = ++age; // pre-increment

console.log(age) // 13
console.log(sameAge) // 13


// If we’d like to increment a value but use its previous value, we need the postfix form:
let newAge = 4;

let sameNewAge = newAge++; // post-increment

// Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

console.log(newAge); // 5
console.log(sameNewAge); // 4

let counter3 = 1;
console.log("counter3: ", ++counter3)
console.log( 2 * ++counter3 ); // 4

let counter4 = 1;
// counter4++;
// console.log(counter4);
console.log("counter4: ", counter4++);
console.log( 2 * counter4++ ); // 2,  because counter++ returns the "old" value

// We advise a style of “one line – one action”:
let counter5 = 1;
console.log("post: ", 2 * counter5 );
counter5++;

console.log(2 * counter5);

console.log("=======================Bitwise operators===================");
// These operators are not JavaScript-specific. They are supported in most programming languages.

/*
The list of operators:

.AND ( & )
.OR ( | )
.XOR ( ^ )
.NOT ( ~ )
.LEFT SHIFT ( << )
.RIGHT SHIFT ( >> )
.ZERO-FILL RIGHT SHIFT ( >>> )
*/

console.log("======================================Comma===============================");
// Is not a good design at all
let sum = (1 + 2, 3 + 4);

console.log(sum); // 7 (the result of 3 + 4)


let sum1 = (1 + 2, 3 + 4);

console.log( sum1 ); // 7 (the result of 3 + 4)

/*
Such tricks are used in many JavaScript frameworks.
 That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
*/

console.log("============================Tasks=====================");
let num1 = "" + 1 + 0;
console.log("1. ", num1); //10
console.log(typeof num1); // number

let num2 = "" - 1 + 0;
// The - operator forces numeric conversion
// "" becomes 0 during that conversion
console.log("2. ", num2); //-1
console.log(typeof num2); // number

let num3 = true + false;

console.log("3. ", num3); // 1
console.log(typeof num3); // number


console.log("4. ", 6 / "3"); //2
console.log("5. ", "2" * "3"); //6
console.log("6. ", 4 + 5 + "px"); //9px
console.log("7. ", "$" + 4 + 5);//$45
console.log("8. ",  "4" - 2); // 2
console.log("9. ", "4px" - 2); //NaN

// Javascript ignores sorrounding spaces
console.log("10. ", "  -9  " + 5); // -9 5
console.log("11. ", "  -9  " - 5); // -14
console.log("12. ", null + 1); 
console.log("13. ", undefined + 1); 
console.log("14. ", " \t \n" - 2); 

let a1 = prompt("First number?", 1);
let b1 = prompt("Second number?", 2);

// Short but not clear 
// alert(+a1 + +b1); // 12

// Best for readability and recommended one
let convert1 = Number(a1);
let convert2 = Number(b1);
alert(convert1 + convert2);