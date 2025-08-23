console.log("hi");

const addOperator = '+';
const subtractOperator = '-';
const multiplyOperator = '*';
const divideOperator = '/';
let  storedNumber= "";
let allValues = [];

const numbersBtn = document.querySelectorAll(".numbersBtn");
const display = document.querySelector(".display");

const operatorsBtn = document.querySelectorAll(".operatorsBtn");
let num1;
let num2; 

const equal = document.querySelector(".equal");

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
	if(operator === divideOperator) {
		if(num2 === 0){
			alert("no");
		} else {return divideNumbers(num1, num2);}
	} else if(operator === addOperator) {
		return addNumbers(num1, num2);
	} else if(operator === subtractOperator) {
		return subtractNumbers(num1, num2);
	} else if(operator === multiplyOperator) {
		return multiplyNumbers(num1, num2);
	} 
}//function opetate

    numbersBtn.forEach(button => {
		button.addEventListener('click', function(event) {
            // Access the value of the clicked button
			 
			 
        
			storedNumber += this.value;

		  display.textContent += this.value;


			
			
			 
			

		 
 
        });
	 
	 
	} );// foreach
   

	 operatorsBtn.forEach(button => {
		button.addEventListener('click', function(event) {

			 allValues.push(parseInt(storedNumber));


		   if (allValues.length > 2) {
				display.textContent = operate(allValues[1], allValues[0], allValues[2]);
				storedNumber = operate(allValues[1], allValues[0], allValues[2]);
				allValues.length = 0;
				allValues.push(parseInt(storedNumber));
				// storedNumber = "";
			}
			allValues.push(this.value);
			display.textContent += this.value;
		   storedNumber = "";

		  
			 
			 
			

		 
 
        });
	  
	 
	} );
 
	equal.addEventListener('click', function() {
            // Access the value of the clicked button
			 
		  allValues.push(parseInt(storedNumber));
			 
			display.textContent = operate(allValues[1], allValues[0], allValues[2]);

			 

		 
 
        });
	 
	 
	
 
	
	 

// console.log(addNumbers(1,2));
// console.log(multiplyNumbers(1,2));
// console.log(subtractNumbers(1,2));
// console.log(divideNumbers(1,2));
// console.log(divideNumbers(1,0));

// console.log(operate('/',5 , 0));




