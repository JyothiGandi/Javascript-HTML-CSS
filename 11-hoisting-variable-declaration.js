/*
Hoisting:
Before any javascript is executed, all function declarations are "hoisted" to the top of their current scope
Hence we can access findAverage
*/

// Normal function

function sayGreeting() {
	console.log(greeting);
}

sayGreeting(); // Uncaught ReferenceError: greeting is not defined

// -----------------------

// Hoisting effect

function sayGreeting() {
	console.log(greeting);
	var greeting;
}

sayGreeting(); // > undefined

// The above is above interpreted as below before getting executed

function sayGreeting() {
	var greeting; // moved to top of the function
	console.log(greeting);
}

sayGreeting(); // Hence it prints undefined

// -----------------------

// Will see what happens if assigned a value to the variable

function sayGreeting() {
	console.log(greeting);
	var greeting = "hello";
}

sayGreeting(); // > undefined

// It still prints undefined due to the bug in the hoisting.
// The variable declaration is hoisted to top of the function but not the assignment.
// It is interpreted as below

function sayGreeting() {
	var greeting;
	console.log(greeting);
	greeting = "hello";
}

sayGreeting(); // Hence it prints undefined


/*
 * Best Practise: Declare functions at the top of the scripts and variables at the top the function
 */

