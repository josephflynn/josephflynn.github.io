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

//////////// PSEUDOCODE ///////////////
//  - Options for password paramenters to be set by User
//   - utilise div, form and input elements to create structure in HTML and style in CSS
//   - checkbox selectors and a form in newly made HTML elements with descriptive criteria and associated IDs

//  - Length of password to be between 8 and 128 characters
//   - variable made for password length to be passed into from User
//   - options from 1 => 128 can be passed in a form submission from the User
//   - this number is then used to shorten or not the full password generated from other checkboxes selections
//   - if password length is too long an alert pops up requiring User to enter number of letters within 1-128 characters

var passwordLength = document.querySelector("#passwordlength")

function lengthAllocation() [

]

//  - Lowercase Charactertypes
//   - checkbox to confirm that the User requests lowercase characters
//   - selects a variable that randomly chooses a combination of lowercase letters in an Array of up to 128
//   - Randomiser
//   - Recurr characters to the length of 128 items in Array

//   - this combination is passed into the larger array of characters for the full password

var lowercaseChar = document.querySelector("#lowercase")

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function charLower() {

}

//  - Uppercase character types
//   - checkbox to confirm that the User requests uppercase characters
//   - selects a variable that randomly chooses a combination of uppercase letters in an Array of up to 128
//   - this combination is passed into the larger array of characters for the full password

var uppercaseChar = document.querySelector("#uppercase")

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function charUpper() {

}

//  - Numeric Characters
//   - checkbox to confirm that the User requests numeric characters
//   - selects a variable that randomly chooses a combination of numeric characters in an Array or up to 128
//   - this combination is passed into the larger array of characters for the full password

var numericChar = document.querySelector("#numeric")

var alphaNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function charNum() {

}

//  - Special Characters
//   - checkbox to confirm that the User requests special characters
//   - selects a variable that randomly chooses a combination of special characters in an Array of up to 128
//   - this combination is passed into the larger array of characters for the full password


var specialChar = document.querySelector("#special")

var alphaSpecial = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function charSpecial() {

}


//  - Password generated from checkbox selections and form submitted by User
//   - The password is made from a variable populated by characters chosen from checkboxes and form
//   - The password Array is then randomised
//   - The password Array is then shortened to the length of characters chosen by User
//   - Password array is then printed out into the <textarea id="password">
//   - passed in through .innerHtml





//  - Functions are ordered with variables having been populated by event selectors on checkboxes and form
//  - When Generate password button is clicked, eventListener makes a password based upon parameters given
//  - Length of password function is ran to shorten password generated.





//  - If no charater type is selected, an error message appears when trying to generate password

//  - Once password has been generated, alert tells user to use password wisely
//  - Password is displayed inside text area to be copied or written down.
