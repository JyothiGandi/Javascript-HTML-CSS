/*
- .getElementByID, .getElementByClassName()
- .querySelector(), .querySelectorAll()
- .innerHTML, .textContent, .innerText
- .parentNode, .childNode
- .createElement()
- .createTextNode()
- .appendChild()
- .insertAdjacentHTML();
- addEventListener click, mouseenter, mouseleave
- classList (add, remove, toggle, replace, contains)
*/

// ===================

// get element having id 'foo'
document.getElementById('foo');

// get all elements that have both 'red' and 'blue'
var x = document.getElementsByClassName('red blue');

// forEach not working
for (var i = 0; i < x.length; i++) {
	console.log(x[i]);
}

// get all elements that have both 'red' and 'blue' under 'main'
document.getElementById('main').getElementsByClassName('red blue');


// get first element with the class 'myclass'
document.querySelector(".myclass")

/*
<div class="user-panel main">...
	<input name="login"/>...
</div>
*/
document.querySelector("div.user-panel.main input[name='login']");

// get all <p>
document.querySelectorAll("p")

// get all <div> with a class 'highlight'
document.querySelectorAll('div.highlight');

// get all <p> whose immediate parent is <div> with class 'highlight'
var x = document.querySelectorAll('div.highlight > p');

// forEach works for querySelectorAll
x.forEach(ele => console.log(ele))

// ===================

/*
Better to use .textContent over .innerHTML (as of some security risks) though .innerHTML will not execute <script> tags
Difference between .textContent and .innerText
- .textContent shows all the text
- .innerText show the text that is visible literally to user
*/

// ====================

var mydiv = document.createElement("div");
var text = document.createTextNode("This is a sample text")

