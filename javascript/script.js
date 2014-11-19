//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "thanksIn".

function signIn() 
{ 
	alert("Thanks for signing in.");
}



//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "thanksUp".

function signUp() 
{
    var userInput = prompt("Email address please");
    document.getElementById("output-here").innerHTML = "Thanks for signing up " + userInput; 
}



//Function called "extraCredit", causes an alert to pop up with text "Thanks for doing extra credit". Should be triggered by clicking on the button with id of "extraCredit".

function extraCredit() 
{ 
    document.getElementById("extraCredit").innerHTML = "Thanks for doing extra credit";
}
