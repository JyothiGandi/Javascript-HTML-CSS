/**
 * Numbers
 **/

function isTypeNumber(num) {
	return typeof num === "number";
}

function isNotANumber(num) {
	return isNaN(num);
}

function isFinite(num) {
	return isFinite(num);
}

function getAbs(num) {
	return Math.abs(num);
}

function getRound(num) {
	return Math.round(num);
}

function getFloor(num) {
	return Math.floor(num);
}

function getCeil(num) {
	return Math.ceil(num);
}

function getPow(num, pow) {
	return Math.pow(num, pow);
}

function getRandom(num) {
	return Math.random();
}

function getRandomBetweenMaxMin(min, max) {
	if (typeof min !== "number" || typeof max !== "number" || isNaN(min) || isNaN(max) || isFinite(min) || isFinite(max)) {
		return NaN;
	}
	return Math.random() * (max - min) + min;
}

function getRandomNumBetweenMaxMin(max, min) {
	if (typeof max !== "number" || typeof min !== "number" || isNaN(min) || isNaN(max) || isFinite(min) || isFinite(max)) {
		return NaN;
	}
	return Math.floor(Math.random() * (max - min) + min);
}

function getMin(array) {
	return Math.min(...array);
}

function getMax(array) {
	return Math.max(...array);
}

function sortNumArrayAsc(array) {
	// sort mutable
	array.sort((a, b) => a - b);
	return array;
}

function sortNumArrayDes(array) {
	return array.sort((a, b) => b - a);
}


