// Functions Practice
// For the first standard function, write a function that accepts two numbers as parameters, adds them together, then returns the result of that addition
// name this function addTwoNums
// TO DO
function addTwoNums(num1, num2) {
	return num1 + num2;
	console.log(sum);
}
// For box 2, let's accept two string parameters and return the result of them concatenated into a single string with a space between the two words
// name this function concatenateStrings
// TO DO
function concatenateStrings(str1, str2) {
    return str1 + " " + str2;
}

// for the first function expression, let's write code that displays returns one result if the number entered by the user is less than 100 ("number is less than 100"), and another message if the number is greater than or equal to 100 ("that is 100 or greater")
// name this variable compareToHundred
// TO DO
let compareToHundred = function(number) {
    if (number < 100) {
        return "Number is less than 100";
    } else {
        return "That is 100 or greater";
    }
}
// for the second function expression, let's write code that tells the user whether or not their answer to a trivia question is correct. This will accept a parameter for a letter answer, and can use either a switch statement or a series of if/else/if statements for the logic
// name this variable quizAnswer
// TO DO
		// if they answered a return "Nope. GIT215 is the Introductory HTML/CSS course."

	
		// if they answered b return "Nope. GIT337 is the Intermediate HTML/CSS course."

	
		// if they answered c return "Nope. GIT414 is the Responsive HTML/CSS course."

	
		// if they answered d return "You got it! GIT417 is the Introductory JavaScript course."
let quizAnswer = function(answer) {
    switch (answer.toLowerCase()) {
        case 'a':
            return "Nope. GIT215 is the Introductory HTML/CSS course.";
        case 'b':
            return "Nope. GIT337 is the Intermediate HTML/CSS course.";
        case 'c':
            return "Nope. GIT414 is the Responsive HTML/CSS course.";
        case 'd':
            return "You got it! GIT417 is the Introductory JavaScript course.";
        default:
            return "Please choose a valid answer.";
    }
}


// For box five, re-write the first standard function in the arrow function syntax
// name the variable addTwoNumsArrow
// TO DO
let addTwoNumsArrow = (num1, num2) => num1 + num2;

// For box five, re-write the second standard function in the arrow function syntax
// name the variable concatenateStringsArrow
// TO DO

let concatenateStringsArrow = (str1, str2) => str1 + " " + str2;





// CODE BELOW IS COMPLETE - DO NOT EDIT

// helper function for box 1, this accepts the user input and parses it into numbers and is called on the click of the submit button in the box
function helpAddTwoNums(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the two numbers from the form and change them from strings into numbers
	let num1 = parseInt(document.getElementById("add1").value.trim());
	let num2 = parseInt(document.getElementById("add2").value.trim());
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section2 .output");

    // hide any previous error messages
    document.getElementById("add1").nextElementSibling.classList.add("hidden");
    document.getElementById("add2").nextElementSibling.classList.add("hidden");

    // boolean variable to track validity
    let isValid = true;

    // validate first input
    if(isNaN(num1)){
        // display error message int he span next to the input's label
        document.getElementById("add1").nextElementSibling.classList.remove("hidden");
        // update boolean value
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    // validate second input
    if(isNaN(num2)){
        // display error message
        document.getElementById("add2").nextElementSibling.classList.remove("hidden");
        // update boolean value
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    // basic validation to make sure we have a number and not a blank input before we add
    if(isValid){
        // call the function you wrote to do the math and store the result in a variable for displaying to the page
        let result = addTwoNums(num1, num2);
        
        // display that math to the user
        output.innerHTML = num1 + " + " + num2 + " = " + result;

        // clear out the inputs
        document.getElementById("add1").value = "";
        document.getElementById("add2").value = "";

        // give the first input focus again so we can enter another value
        document.getElementById("add1").focus();
    }
}

// helper function for box 2 - grabs the strings and calls the concatenateStrings method then outputs the result to the page
function helpConcatenateStrings(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the two strings from the form
	let str1 = document.getElementById("str1").value.trim();
	let str2 = document.getElementById("str2").value.trim();
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section3 .output");

    // hide previous error messages
    document.getElementById("str1").nextElementSibling.classList.add("hidden");
    document.getElementById("str2").nextElementSibling.classList.add("hidden");

    // boolean to track validity
    let isValid = true;

    // validate each input, display error message and change boolean if needed
    if(str1 === ""){
        // display an error message to the user
        document.getElementById("str1").nextElementSibling.classList.remove("hidden");
        // change validity to false
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    if(str2 === ""){
        // display error message to user
        document.getElementById("str2").nextElementSibling.classList.remove("hidden");
        //change validity to false
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    // handle calling the form function when inputs are valid
    if(isValid){
        // call the function you wrote to do the math and store the result in a variable for displaying to the page
        let result = concatenateStrings(str1, str2);
        
        // display that math to the user
        output.innerHTML = str1 + " + " + str2 + " = " + result;

        // clear out the inputs
        document.getElementById("str1").value = "";
        document.getElementById("str2").value = "";

        // give the first input focus again so we can enter another value
        document.getElementById("str1").focus();
    }
}

// helper function for function expression 1, this accepts the user input and parses it into a number then calls the function expression you wrote to display the result to the screen
function helpCompareToHundred(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the two numbers from the form and change them from strings into numbers
	let number = parseInt(document.getElementById("add3").value.trim());
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section5 .output");

    // hide any previous error messages
    document.getElementById("add3").nextElementSibling.classList.add("hidden");

    // validate input, complete function if valid, show error message if not
    if(isNaN(number)){
        // input is not valid, show the error message
        document.getElementById("add3").nextElementSibling.classList.remove("hidden");
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }else{
        // call the function you wrote to do the comparison and store the result in a variable for displaying to the page
        let result = compareToHundred(number);
	
        // display that math to the user
        output.innerHTML = result;

        // clear out the input
        document.getElementById("add3").value = "";

        // give the input focus again so we can enter another value
        document.getElementById("add3").focus();
    }
}

// helper function for function expression 2, this gets the user input then calls the function expression you wrote to display the result to the screen
function helpQuizAnswer(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the user choice from select
	let answer = document.getElementById("answer").value;
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section6 .output");

    // hide any previous error messages
    document.getElementById("answer").nextElementSibling.classList.add("hidden");
    console.log('select error span ', document.getElementById("answer").nextElementSibling)

    // check to be sure that the user has made a selection, show an error message if not
    if(answer === ""){
        // this means that the user has not made a selection, ask them to do that
        document.getElementById("answer").nextElementSibling.classList.remove("hidden");
        // clear any previous output
        output.innerHTML = "";
    }else{
        // in this case, the user chose from the list, tell them if it's correct or not
        // call the function you wrote to check the answer and store the result in a variable for displaying to the page
        let result = quizAnswer(answer);
        
        // display the feedback to the user
        output.innerHTML = result;

        // reset dropdown
        document.getElementById("answer").value = "";

        // give focus back to the dropdown
        document.getElementById("answer").focus();
    }
}

// helper function for box 5, this accepts the user input and parses it into numbers and is called on the click of the submit button in the box
function helpAddTwoNumsArrow(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the two numbers from the form and change them from strings into numbers
	let num1 = parseInt(document.getElementById("add5").value);
	let num2 = parseInt(document.getElementById("add6").value);
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section8 .output");

    // hide any previous error messages
    document.getElementById("add5").nextElementSibling.classList.add("hidden");
    document.getElementById("add6").nextElementSibling.classList.add("hidden");

    // boolean to track validity
    let isValid = true;

    // validate the first input, display error span if needed
    if(isNaN(num1)){
        // show the error span for this input
        document.getElementById("add5").nextElementSibling.classList.remove("hidden");
        // change boolean value
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    // validate second input, display error span if needed
    if(isNaN(num2)){
        // show the error span for this input
        document.getElementById("add6").nextElementSibling.classList.remove("hidden");
        // change boolean value
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

	// if the form inputs are valid, handle the functionality
    if(isValid){
        // call the function you wrote to do the math and store the result in a variable for displaying to the page
        let result = addTwoNumsArrow(num1, num2);
        
        // display that math to the user
        output.innerHTML = num1 + " + " + num2 + " = " + result;

        // clear out the inputs
        document.getElementById("add5").value = "";
        document.getElementById("add6").value = "";

        // give the first input focus again so we can enter another value
        document.getElementById("add5").focus();
    }
}

// helper function for box 9 - grabs the strings and calls the concatenateStrings method then outputs the result to the page
function helpConcatenateStringsArrow(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the two strings from the form
	let str1 = document.getElementById("str5").value;
	let str2 = document.getElementById("str6").value;
	
	// get the paragraph to use for output/displaying the result
	let output = document.querySelector("#section9 .output");

    // hide previous error messages
    document.getElementById("str5").nextElementSibling.classList.add("hidden");
    document.getElementById("str6").nextElementSibling.classList.add("hidden");

    // boolean to track validity
    let isValid = true;

    // validate each input, display error message and change boolean if needed
    if(str1 === ""){
        // display an error message to the user
        document.getElementById("str5").nextElementSibling.classList.remove("hidden");
        // change validity to false
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    if(str2 === ""){
        // display error message to user
        document.getElementById("str6").nextElementSibling.classList.remove("hidden");
        //change validity to false
        isValid = false;
        // clear out any previous input from the output paragraph
        output.innerHTML = "";
    }

    // handle calling the form function when inputs are valid
    if(isValid){
        // call the function you wrote to do the math and store the result in a variable for displaying to the page
        let result = concatenateStringsArrow(str1, str2);
        
        // display that math to the user
        output.innerHTML = str1 + " + " + str2 + " = " + result;

        // clear out the inputs
        document.getElementById("str5").value = "";
        document.getElementById("str6").value = "";

        // give the first input focus again so we can enter another value
        document.getElementById("str5").focus();
    }
}



// these are the event handlers that tell the code what to do when a button is clicked
document.getElementById("mySubmit1").addEventListener("click", helpAddTwoNums);
document.getElementById("mySubmit2").addEventListener("click", helpConcatenateStrings);
document.getElementById("mySubmit3").addEventListener("click", helpCompareToHundred);
document.getElementById("mySubmit4").addEventListener("click", helpQuizAnswer);
document.getElementById("mySubmit5").addEventListener("click", helpAddTwoNumsArrow);
document.getElementById("mySubmit6").addEventListener("click", helpConcatenateStringsArrow);

// this will use the highlight.js library to add some style to the code snippets on page load
// (works because our scripts are deferred in the head of the HTML)
hljs.highlightAll();

// this code updates the year in the footer for the copyright on page load
// this style of function  is an immediately invoked function expression (IIFE)
// it is an anonymous function that calls itself and only runs on page load once
(function(){
	let now = new Date();
	let span = document.querySelector("footer span");
	span.innerHTML = now.getFullYear();
})();
