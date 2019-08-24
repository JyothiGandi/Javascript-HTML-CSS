/**
 * Strings
 **/

var mars = "This is from mars. Aliens do exist!"
mars.charAt(0); // T
mars.charCodeAt(0); // 84


// immutable => need to assign this to store
mars.concat(" OMG ", "Recieved communication from them"); // "This is from mars. Aliens do exist! OMG Recieved communication from them"
var pluto = [" Same from pluto ", " positive "]
mars.concat(...pluto); // "This is from mars. Aliens do exist! Same from pluto  positive "
mars.concat(pluto); // "This is from mars. Aliens do exist! Same from pluto , positive "


var x = "earth"
x.padEnd(8, '.'); //"earth..." => (8-5) dots
x.padStart(8, '.'); //"...earth"
x.repeat(2); //"earthearth"


var sen = "The quick brown fox jumps";
sen.includes("fox"); //true
sen.indexOf("he"); // 1


var letter = "SpaceX doing project 123";
var regExp = /^[A-Z]{1}[a-zA-Z\s]*\d*/
letter.match(regExp); // ["SpaceX doing project 123"]


"The quick brown fox".substring(0, 9); //"The quick"
"The quick brown fox".substring(4); //"quick brown fox"

"The quick brown fox".slice(0, 9); //"The quick"
"The quick brown fox".slice(4); //"quick brown fox"
"The quick brown fox".slice(-3); //"fox"
"The quick brown fox".slice(-9, -4); //"brown"


// startsWith, endWith


"   The quick brown fox   ".trim(); //"The quick brown fox"
"   The quick brown fox   ".trimStart(); //"The quick brown fox   "
"   The quick brown fox   ".trimEnd(); // "   The quick brown fox"


" Red Clock".toLowerCase(); // " red clock"
" Red Clock".toUpperCase(); // " RED CLOCK"
