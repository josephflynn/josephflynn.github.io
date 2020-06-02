// Assignment Code
var lowercaseChar = document.querySelector("#lowercase");
var uppercaseChar = document.querySelector("#uppercase");
var numericChar = document.querySelector("#numeric");
var specialChar = document.querySelector("#special");

var longPassword = [];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaLowerChecked = [];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaUpperChecked = [];
var alphaNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaNumberChecked = [];
var alphaSpecial = ["!", "\\", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var alphaSpecialChecked = [];

//  - Length of password to be between 8 and 128 characters
var passwordLengthUser = Number(prompt("please enter the length of characters you would like in your password from 1 - 128"));
//   - if password length is too long an alert pops up requiring User to enter number of letters within 1-128 characters
while (isNaN(passwordLengthUser) || passwordLengthUser > 128) {
  passwordLengthUser = Number(prompt("Invalid Entry, please enter a number from 1 - 128"));
}

//  - Lowercase Charactertypes
//   - checkbox to confirm that the User requests lowercase characters
//   - Array is increased to 128 iterations of the characters available in the array
lowercaseChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaLower.length; ++i){
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
      alphaLowerChecked.push(alphaLower[i]);
    }
  } else {
    alphaLowerChecked = [];
  }
});

//  - Uppercase character types
//   - checkbox to confirm that the User requests uppercase characters
//   - Array is increased to 128 iterations of the characters available in the array
uppercaseChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaUpper.length; ++i){
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
      alphaUpperChecked.push(alphaUpper[i]);
    }
  } else {
    alphaUpperChecked = [];
  }
});

//  - Numeric Characters
//   - checkbox to confirm that the User requests numeric characters
//   - Array is increased to 128 iterations of the characters available in the array
numericChar.addEventListener('change', function() {
  if(this.checked) {
    for(var i = 0; i< alphaNumber.length; ++i){
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
});

//  - Special Characters
//   - checkbox to confirm that the User requests special characters
//   - Array is increased to 128 iterations of the characters available in the array
specialChar.addEventListener('change', function() {
  if (this.checked) {
    for(var i = 0; i< alphaSpecial.length; ++i){
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
      alphaSpecialChecked.push(alphaSpecial[i]);
    }
  } else {
    alphaSpecialChecked = [];
  }
});

// after selections have been checked and/or unchecked, push them into the longPassword Array
function checksMade() {
  for(var i = 0; i< alphaLowerChecked.length; ++i){
    longPassword.push(alphaLowerChecked[i]);
  }
  for(var i = 0; i< alphaUpperChecked.length; ++i){
    longPassword.push(alphaUpperChecked[i]);
  }
  for(var i = 0; i< alphaNumberChecked.length; ++i){
    longPassword.push(alphaNumberChecked[i]);
  }
  for(var i = 0; i< alphaSpecialChecked.length; ++i){
    longPassword.push(alphaSpecialChecked[i]);
  }
}

//  - Put final password together on the click of the generate button in HTML
//   - collate checked character sets
//   - randomise or shuffle all characters
//   - reduce password length to user's choice
//   - insert into HTML page on screen inside the textarea
function writePassword() {
  checksMade();
  function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }
  var finalPassword = longPassword;
  console.log(shuffle(finalPassword));
  var sliced = finalPassword.slice(0, passwordLengthUser);
  var password = sliced.join("")
  document.getElementById("password").innerHTML = password;
}