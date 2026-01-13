/* Make a faulty calculator which takes two numbers as input. And operation is as follows:
+ ---> -
- ---> *
* ---> /
/ ---> **

But only 10% of the time make mistakes.
*/
// second way to write the same code.

let random = Math.random();
let a = prompt("Enter first number:");
let operator = prompt("Enter operator (+, -, *, /):");
let b = prompt("Enter second number:");

let obj = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "**"
}
if (random > 0.1) {
    // Perform right operation
    alert(`The result is: ${eval(`${a} ${operator} ${b}`)}`);

}
else {
    // Perform faulty operation
    operator = obj[operator];
    alert(`The result is: ${eval(`${a} ${operator} ${b}`)}`);

}
