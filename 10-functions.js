/*
 if we do not return anything explicitly,
 functions will always return undefined.
 return - Use to stop execution of a function and "return" a value back to the caller.
*/

function reverseString(reverseMe) {
	var reversed = "";
	for (let i = reverseMe.length-1; i >= 0; i--) {
		reversed += reverseMe[i];
	}
	console.log(reversed);
}

/*
> reverseString("Jyo")
  oyJ
< undefined
*/

function reverseString(reverseMe) {
	var reversed = "";
	for (let i = reverseMe.length-1; i >= 0; i--) {
		reversed += reverseMe[i];
	}
	console.log(reversed);
	return reversed;
}

/*
> reverseString("Jyo")
  oyJ
< "oyJ"
*/


