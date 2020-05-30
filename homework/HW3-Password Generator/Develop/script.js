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

var longPassword = [];

var passwordLength = document.querySelector("#passwordlength");

function lengthAllocation() {

}

//  - Lowercase Charactertypes
//   - checkbox to confirm that the User requests lowercase characters
//   - Array is increased to 128 iterations of the characters available in the array
//   - Array is then passed into Randomiser Array

var lowercaseChar = document.querySelector("#lowercase");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaLowerChecked = [];

// Multiply items in the array until the amount reaches the maximum 128 characters, in AlphaLowerLowerChecked
lowercaseChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaLower.length;++i){
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
    }
  } else {
    alphaLowerChecked = [];
  }
  longPassword.push(...alphaLowerChecked);
});

//  - Uppercase character types
//   - checkbox to confirm that the User requests uppercase characters
//   - Array is increased to 128 iterations of the characters available in the array
//   - Array is then passed into Randomiser Array

var uppercaseChar = document.querySelector("#uppercase");

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaUpperChecked = [];

// Multiply items in the array until the amount reaches the maximum 128 characters, in AlphaUpperChecked
uppercaseChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaUpper.length;++i){
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
    }
  } else {
    alphaUpperChecked = [];
  }
  longPassword.push(...alphaUpperChecked);
});


//  - Numeric Characters
//   - checkbox to confirm that the User requests numeric characters
//   - Array is increased to 128 iterations of the characters available in the array
//   - Array is then passed into Randomiser Array

var numericChar = document.querySelector("#numeric");

var alphaNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaNumberChecked = [];

numericChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaNumber.length;++i){
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
      alphaNumberChecked.push(alphaNumber[i]);
    }
  } else {
    alphaNumberChecked = [];
  }
  longPassword.push(...alphaNumberChecked);
});

//  - Special Characters
//   - checkbox to confirm that the User requests special characters
//   - Array is increased to 128 iterations of the characters available in the array
//   - Array is then passed into Randomiser Array


var specialChar = document.querySelector("#special");

var alphaSpecial = ["!", "\\", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var alphaSpecialChecked = [];

specialChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaSpecial.length;++i){
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
    }
  } else {
    alphaSpecialChecked = [];
  }
  longPassword.push(...alphaSpecialChecked);
});

//   - Password array is then printed out into the <textarea id="password">
//   - passed in through .innerHtml

//  - Concat Arrays into the longPassword variable
//   - Randomise the array
 

// longPassword = alphaLowerChecked.concat(alphaUpperChecked, alphaNumberChecked, alphaSpecialChecked);

// function concatenateCharacters() {
//   if (generateBtn.addEventListener("click", writePassword)) {
//     longPassword= alphaLowerChecked.concat(alphaUpperChecked, alphaNumberChecked, alphaSpecialChecked);
// console.log(longPassword);
//   }
// }
// concatenateCharacters();


//  - Functions are ordered with variables having been populated by event selectors on checkboxes and form
//  - When Generate password button is clicked, eventListener makes a password based upon parameters given
//  - Length of password function is ran to shorten password generated.





//  - If no charater type is selected, an error message appears when trying to generate password

//  - Once password has been generated, alert tells user to use password wisely
//  - Password is displayed inside text area to be copied or written down.
