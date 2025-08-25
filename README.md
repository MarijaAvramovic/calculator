# calculator

Introduction
This project is showing practice of fundamentals of JavaScript. It is going to combine everything you’ve learned so far: you’re going to make an on-screen calculator using JavaScript, HTML, and CSS.

We’re going to walk you through the various steps you can take.


### Assignment
I will commit early & often.

Here are some use cases (expectations about your project):

- Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
add create function a + b
subtract function a - b
multiply function a * b
divide function a / b


- A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. on click =

- Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
1st number opetation 2nd number 

- Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
5th f operate calls other function use if

- Create a basic HTML calculator with buttons for each digit and operator (including =).
Don’t worry about making them functional just yet. 10 buttons for digits, 4 btns for operators and one button for =

- There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct. 
display or div or input

- Add a “clear” button. 16th btn

- Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step. new function on click add it in display and save the value

- Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.

- You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation. 
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

- Gotchas: watch out for and fix these bugs if they show up in your code:

- Your calculator should not evaluate more than a single pair of numbers at a time. For example, this is how your calculator should function:
Enter a number (12).
Enter an operator (+).
Enter a second number (7).
Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then display the result (19).
Enter another number (1).
Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see the result (18) on the display.
To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this online calculator.

- You should round answers with long decimals so that they don’t overflow the display.

- Pressing = before entering all of the numbers or an operator could cause problems!

- Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.

- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

- Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.

- When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!


### Extra credit

- Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.

- Add a “backspace” button, so the user can undo their last input if they click the wrong number. 

- Add keyboard support!

- time spent: 8hr

- Warning about eval() and new Function()
Before you get started with the project, we need to cover a word of warning.
- As you look into how to evaluate complex mathematical statements in JavaScript, you will likely come across the tantalizing eval() function. However, this function can be very dangerous and MDN does a good job documenting why you should never use eval! 
- You’ll need to build your own functions to evaluate expressions as part of this project. On the same note, when researching how to calculate expressions, you may encounter solutions that suggest that you return a new Function() that evaluates a string. Similarly to eval(), this should not be used due to potential pitfalls of evaluating insecure data. Besides, where’s the fun in solutions that do all the work for you? Let’s get to it!