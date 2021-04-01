// Made in collaboration with Tom Siemion
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Baseline variables to determine which characters are included in the password
function generatePassword(){
  var characterAmount = 0;
  var lowerCharactersSelected = false;
  var upperCharactersSelected = false;
  var numbersSelected = false;
  var specialCharactersSelected = false;
//Variables that store the various types of characters possible.
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var specialCharacters = "!@#%^&*()";
//Prompt that determines the length of the password.
  characterAmount = prompt("How many characters do you want in your password?")
  while (characterAmount < 8 || characterAmount > 128) {
    alert("Only between 8 and 128 characters allowed");
    characterAmount = prompt("How many characters do you want in your password")
  }
//confirmation boxes determining what characters to use
  lowerCharactersSelected = confirm("Do you want lower case characters?");
  upperCharactersSelected = confirm("Do you want upper case characters?");
  numbersSelected = confirm("Do you want numbers?");
  specialCharactersSelected = confirm("Do you want special characters?");

//console log true / false determining what characters are in use
  console.log("Password Length: " + characterAmount);
  console.log("Lower case characters? " + lowerCharactersSelected);
  console.log("Upper case characters? " + upperCharactersSelected);
  console.log("Numeric characters? " + numbersSelected);
  console.log("Special characters? " + specialCharactersSelected);
//total pool of available characters
  var characterSelection = "";
//actual generated password
  var generatedPassword = "";
//if statements that determine which characters to add based off user input
  if (lowerCharactersSelected) {
    characterSelection += lowerCaseCharacters;
  }

  if (upperCharactersSelected) {
    characterSelection += upperCaseCharacters;
  }

  if (numbersSelected) {
    characterSelection += numberCharacters;
  }

  if (specialCharactersSelected) {
    characterSelection += specialCharacters;
  }
// For loop that starts at 0, increases by 1, to a maximum of the selected amount of characters.
  for(var i = 0; i < characterAmount; i++){
    //Random number generator that assigns index a random, rounded down whole integer with a max amount equivalent to the total amount of values in the characterSelection array.
    var index = Math.floor(Math.random() * (characterSelection.length-0) + 0); 
    // Final password has characters added to it from the characterSelection array, pulling digits with equivalent array index values to what was randomly generated above.
    generatedPassword += characterSelection[index];

  }

  return generatedPassword;
  
}
// Made in collaboration with Tom Siemion


// ask for number of characters in password
// do you want lowercase
// do you want uppercase
// do you want numbers
// do you want special characters
// log selected user characters
// generate a random string utilizing selected characters
// output string to user
// else statement saying invalid entry, do you want to continue? okay means flat restart, cancel redirects to index.html.