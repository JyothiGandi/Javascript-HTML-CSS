/*
Hoisting:
Before any javascript is executed, all function declarations are "hoisted" to the top of their current scope
Hence we can access findAverage
*/

findAverage(2, 4);

function findAverage(x, y) {
	return (x + y) / 2;
}

// Javascript is interpreted as below before executing

function findAverage(x, y) {
	return (x + y) / 2;
}

findAverage(2, 4);


/*
 * Best Practise: Declare functions at the top of the scripts and variables at the top the function
 */
