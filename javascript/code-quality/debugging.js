console.log("========Debugging in the browser=========");

console.log("==========Breakpoints==========");
/*
A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.

While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.

We can always find a list of breakpoints in the right panel. That’s useful when we have many breakpoints in various files. 
It allows us to:

Quickly jump to the breakpoint in the code (by clicking on it in the right panel).
Temporarily disable the breakpoint by unchecking it.
Remove the breakpoint by right-clicking and selecting Remove.
*/

/*
🔍 What is debugger in simple terms?
debugger is like saying:

👉 “Pause here. I want to see if this line is working and what’s happening right now.”
*/

// Such command works only when the development tools are open, otherwise the browser ignores it.

/*
🔧 3 Best Ways to Trace Execution:

✅ 1. Use console.log()
✅ 2. Use debugger; (Manual Pause)
✅ 3. Use Breakpoints in VS Code
🧠 Bonus: console.trace()
*/

let firstName = "Divine";
// debugger; // <-- the debugger stops here
let lastName = "Ajaegbu";

let fullName = `My full is ${firstName} ${lastName}`;

console.log(fullName);

console.log("==========Tracing the execution=======");
