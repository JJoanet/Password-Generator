# Homework3
Fun project!

We started by defining the total variables we felt we would need as global variables.
We assigned a baseline false value to the Selected variables to omit them unless specified by the user.
We assigned the pool variables with what values they would have if selected.

We created a prompt to ask the user how many characters they want their password to be.
We tied a while loop to this variable to ensure it met the criteria of > 8, < 128.

We created a series of prompts to determine the boolean value of the Selected variables, which in turn determines which character value pools to utilize in the password.

I created a series of console.logs to show which characters were currently in play in console, this is solely for development + to show the end passwords possibilities.

We created an additional variable to compile a total list of available characters based on user selection

We created a series of if statements to add characters from the character pool variables to the total list with the Selected variables as the condition.

We created a for loop that generates a random number between 0 and total length of total character pool, x the total user selected character amount, rounded down. We pulled values from our characterSelection array utilizing the result from our RNG. We utilized our final variable "generatedPassword" to store the values.

Made in collaboration with Tom Siemion.

![screenshot](./Assets/Hw3-Screenshot.PNG)
