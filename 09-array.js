/**
 * Arrays
 * Map, Set, object
 **/

// ============ forEach
var array1 = ['a', 'b', 'c'];
// cannot use break in forEach
array1.forEach((ele, index) => {
	console.log(ele, index);
});
for (let i=0; i<array1.length; i++) {
	console.log(array1[i], i);
}


// ============ map
// do not use MAP when
// - not using the array it returns
// - not returning a value from the callback
var numbers = [1, 4, 9];
var root = numbers.map(num => Math.sqrt(num));


// ============ reduce
// output => {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var nameCount = names.reduce((acc, cur) => {
	if (cur in acc) acc[cur] = acc[cur] + 1;
	else acc[cur] = 1;
	return acc;
}, {}); // {} sets acc value as {}

[1, 5, 3, 4, 2].reduce((acc, cur) => Math.min(acc, cur)); // 1
[1, 5, 3, 4, 2].reduce((acc, cur) => Math.max(acc, cur)); // 5
[1, 5, 3, 4, 2].reduce((acc, cur) => acc + cur); // 15


// ============ filter
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
var filFruits = fruits.filter(el => el.incudes("ap")); // ["apple", "grapes"]


// ============ flat - immutable
[1, , 2, [3, [4, [6, 7]]]].flat(3) // [1, 2, 3, 4, 6, 7]


// ============ sort - mutable
[1,2,3].sort(); // [1,2,3]
['a', 'b'].sort(); // ['a', 'b']
var names = ["Edward", "Sharpe", "Sharpe" , "The", "Magnetic", "Zeros", "Zaros"];
names.sort(); // ["Edward", "Magnetic", "Sharpe", "Sharpe", "The", "Zaros", "Zeros"]
names.sort((a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}); // ["Zeros", "Zaros", "The", "Sharpe", "Sharpe", "Magnetic", "Edward"]


// ============ reverse - mutable
["e", "a", "g", "c" , "f", "b"].sort(); //["a", "b", "c", "e", "f", "g"]
["e", "a", "g", "c" , "f", "b"].sort().reverse(); //["g", "f", "e", "c", "b", "a"]


// ============ concat - immutable
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e',];
var array3 = ['f', 'g'];
array1.concat(array2, ...array3, 'h', 'i'); // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]


// ============ join - immutable
var elements = ['Fire', 'Air', 'Water'];
elements.join(); //"Fire,Air,Water"
elements.join('#'); //"Fire#Air#Water"


// ============ find
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'grapes', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
inventory.find(ele => ele.name === 'cherries'); //{name: "cherries", quantity: 5}
inventory.find(ele => ele.name === 'custard'); //undefined
// ============ findIndex
inventory.findIndex(ele => ele.name === 'cherries'); //2
inventory.find(ele => ele.name === 'custard'); //-1


// ============ includes
['apple', 'banana'].includes('apple'); //true
['apple', 'banana'].includes('ap'); //false


// ============ indexOf
['apple', 'banana'].indexOf('app'); //-1
['apple', 'banana'].indexOf('apple'); //0


// ============ pop - mutable - remove last element
var animals = ['goats', 'sheep'];
animals.pop(); // "sheep"
animals.pop(); // "goats"
animals.pop(); // undefined
//  ============ shift - mutable - remove first element
var animals = ['goats', 'sheep'];
animals.shift(); // "goats"
animals.shift(); // "sheep"
animals.shift(); // undefined

// ============ push - mutable - add as last element
var animals = ['goats'];
animals.push("sheep"); // 2
animals.push("cow"); // 3
console.log(animals); //["goats", "sheep", "cow"]
// ============ unshift - mutable - add as first element
var animals = ['goats'];
animals.unshift("sheep") // 2
animals.unshift("cow") // 3
console.log(animals); ["cow", "sheep", "goats"]

// ============ splice(start, [deleteCount], [items],...) - mutable - powerful (delete, replace, add)
var x = ['a', 'b', 'c', 'd', 'e', 'f']
x.splice(2); //  ["c", "d", "e", "f"] :: x => ['a', 'b']
var x = ['a', 'b', 'c', 'd', 'e', 'f']
x.splice(-2); // ["e", "f"] :: x => ["a", "b", "c", "d"]
var x = ['a', 'b', 'c', 'd', 'e', 'f']
x.splice(-2, 1); // ["e"] :: x => ["a", "b", "c", "d", "f"]
var x = ['a', 'b', 'c', 'd', 'e', 'f']
x.splice(3, 1, "j"); // ["d"] :: x => ["a", "b", "c", "j", "e", "f"]


// ============ slice - immutable
var x = ['a', 'b', 'c', 'd', 'e', 'f']
x.slice(3) // ["d", "e", "f"]
x.slice(3, -1) //  ["d", "e"]
x.slice(3,5) // ["d", "e"]
x.slice(-3) // ["d", "e", "f"]


/**
 * Find number of occurences in a text
 */
var x = "An array is a systematic arrangement of similar objects, usually in rows and columns. An Array data structure Similar objects.";
x
.replace(/\.?\,?/g, '')
.toLowerCase()
.split(" ")
.reduce((acc, cur) => {
	if (cur in acc) acc[cur] += 1;
	else acc[cur] = 1;
	return acc;
}, {})
