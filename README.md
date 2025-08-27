# calculator

Introduction
This is on-screen calculator that includes JavaScript, HTML, and CSS.

### Assignment
I used commit early & often.


- The calculator contains functions for 4 of the basic math operators you typically find on calculators.

- A calculator operation can consist of a number, an operator, and another number.

- In order to create three variables, one for each part of the operation, used as well to update your display later. I used array to help me out with data. 

- A function operate  is created that takes an operator and two numbers and then calls one of the basic functions on the numbers used swith.

- Buttons are created with a basic HTML, for each digit and operator (including =).

- There is also a display for the calculator. Showing dummy numbers.

- The "clear” button erases all. Pressing “clear” wipes out any existing data. Make sure the user is really starting fresh after pressing “clear”.

- Display value is stored as first number once user click on operator right after stored number is cleared making room for 2nd number.

-  Operator is also stored in array as second element.

- I stored all the values in array and called the operate function with them.

- The calculator can not evaluate more than a single pair of numbers at a time.(For example:
Enter a number (12).
Enter an operator (+).
Enter a second number (7).
Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then display the result (19).
Enter another number (1).
Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see the result (18) on the display.
To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this online calculator.)

- The answers are rounded so long decimals don’t overflow the display.

- Pressing = before entering all of the numbers or an operator cis showing an error.

- If the user tries to divide by 0 it shows an error message.

-If consecutive operator buttons are pressed, the calculator will not run any evaluations, it will only take the last operator entered to be used for the next operation.

- When a result is displayed, pressing a new digit will clear the result and start a new calculation instead of appending the digit to the existing result. 


### Extra credit

- The button "." lets users input decimals. The btn is disabled if there’s already a decimal separator in the display.

- The “backspace” button is not functional yet

- Add keyboard support!

- time spent: 12hr
