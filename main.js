console.log("hi");

const addOperator = '+';
const subtractOperator = '-';
const multiplyOperator = '*';
const divideOperator = '/';
let  storedNumber= "";
let allValues = [];
let result;


const numbersBtn = document.querySelectorAll(".numbersBtn");
const display = document.querySelector(".display");

const operatorsBtn = document.querySelectorAll(".operatorsBtn");
let num1;
let num2; 

const equal = document.querySelector(".equal");

const clearBtn = document.querySelector(".clear");

// variables



function addNumbers(a, b) {

	result = a + b;

	if(result !== Math.floor(result)){

		return parseFloat(result.toFixed(2));
	}  
	return result;
	
}

function subtractNumbers(a, b) {


	result = a - b;

	if(result !== Math.floor(result)){
		return parseFloat(result.toFixed(2));
	}  
	return result;
}

function multiplyNumbers(a, b) {

	result = a * b;
	if(result !== Math.floor(result)){
		return parseFloat(result.toFixed(2));
	}  
	return result;
}

function divideNumbers(a, b) {

    if(b === 0) {
        alert("An error occurred: Please check your input. Cant divide by 0");
        return false;
    } else {

	result = a / b;
		if(result !== Math.floor(result)){
		return parseFloat(result.toFixed(2));
	}  
	return result;

    }
}
// basic math 

function operate(operator, num1, num2) {

	switch (operator) {
  case divideOperator:
    divideNumbers(num1, num2);
	if (result){
		return result;
	} else {
		clearAll();
	}
    break;
  case addOperator:
      return  addNumbers(num1, num2);
    break;
   case multiplyOperator:
      return  multiplyNumbers(num1, num2);
    break;
	case subtractOperator:
      return  subtractNumbers(num1, num2);
    break;
  default:
  return  alert("error");
	break;
}
	
}


function clearAll(){
	storedNumber = "";
	allValues.length = 0;
	display.textContent = "";

}
    numbersBtn.forEach(button => {
		button.addEventListener('click', function(event) {
            // Access the value of the clicked button
			 
			 if (isDisplayed) {
				clearAll();
				isDisplayed = false;
			 }
        
			storedNumber += this.value;

		  display.textContent += this.value; 
        });
	 
	 
	} );// foreach
   

	 operatorsBtn.forEach(button => {
		button.addEventListener('click', function(event) {
			 
			if (storedNumber !== "") {
				allValues.push(parseFloat(storedNumber));
			}
			 

				if (allValues.length > 2) {
			
							display.textContent = operate(allValues[1], allValues[0], allValues[2]);
				storedNumber = operate(allValues[1], allValues[0], allValues[2]);
				allValues.length = 0;
				allValues.push(parseFloat(storedNumber));
				// storedNumber = "";
					
			
		}

			
		   
			allValues.push(this.value);
			display.textContent += this.value;
		   storedNumber = "";
 
        });
	  
	 
	} );
	let isDisplayed = false;
	equal.addEventListener('click', function() {
			 
		  allValues.push(parseFloat(storedNumber));
			 
			display.textContent = operate(allValues[1], allValues[0], allValues[2]);
			isDisplayed = true;
        });
	 

	 clearBtn.addEventListener('click', function() {
		clearAll();
        });
	
 
	
	 

// console.log(addNumbers(1,2));
// console.log(multiplyNumbers(1,2));
// console.log(subtractNumbers(1,2));
// console.log(divideNumbers(1,2));
// console.log(divideNumbers(1,0));

// console.log(operate('/',5 , 0));




