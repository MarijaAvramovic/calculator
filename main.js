console.log("hi");


function addNumbers(a, b) {

	let result;

	result = a + b;

	return result;
}

function subtractNumbers(a, b) {

	let result;

	result = a - b;

	return result;
}

function multiplyNumbers(a, b) {

	let result;

	result = a * b;

	return result;
}

function divideNumbers(a, b) {

    if(b === 0) {
        alert("no!");
        return false;
    } else {
	let result;

	result = a / b;

	return result;

    }
}
// basic math 

console.log(addNumbers(1,2));
console.log(multiplyNumbers(1,2));
console.log(subtractNumbers(1,2));
console.log(divideNumbers(1,2));
console.log(divideNumbers(1,0));