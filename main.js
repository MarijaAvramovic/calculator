console.log("hi");

const addOperator = '+';
const subtractOperator = '-';
const multiplyOperator = '*';
const divideOperator = '/';
let storedButtonValue = "";

const numbersBtn = document.querySelectorAll(".numbersBtn");
const display = document.querySelector(".display");

let num1;
let num2; 

// variables



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

function operate(operator, num1, num2) {
	if(operator === divideOperator && num2 === 0){
		alert("no");
	} else if(operator === addOperator) {
		return addNumbers(num1, num2);
	} else if(operator === subtractOperator) {
		return subtractNumbers(num1, num2);
	} else if(operator === multiplyOperator) {
		return multiplyNumbers(num1, num2);
	} else if (operator === divideNumbers){
		return divideNumbers(num1, num2);
	} 
}//function opetate

    numbersBtn.forEach(button => {
		button.addEventListener('click', function(event) {
            // Access the value of the clicked button
			 
           const btnValue = this.value;
		  storedButtonValue += btnValue;
			 
			
            // Display the stored value (optional)
            // display.textContent = userNumber;
			display.textContent =  storedButtonValue;
 
        });
		 
	
	} );// foreach
		
		
		
		

// console.log(addNumbers(1,2));
// console.log(multiplyNumbers(1,2));
// console.log(subtractNumbers(1,2));
// console.log(divideNumbers(1,2));
// console.log(divideNumbers(1,0));

// console.log(operate('/',5 , 0));

