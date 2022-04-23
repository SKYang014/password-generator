// Assignment code here
var countCharacter;
var countUpper;
var countNumeric;
var countSpecial;

// const allcharacters = [
//   var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   var lowerLetters = "abcdefghijklmnopqrstuvwxyz",
//   var numbers = "123456789",
//   var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// ];

// const password = [upperLetters, lowerLetters, numbers, special]



// create all character count array
// create randomizer function
// lower case create a string that runs through randomizer
// add in per set of randomized special characters, also insert the character somewhere random
// display new string in password


function special (length) {
  var result           = '';
  var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}

function numbers (length) {
  var result           = '';
  var characters = '123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}

function lowerLetters(length) {
  var result           = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}

function upperLetters(length) {
  var result           = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}

//Put blocks together
var generatePassword = function (length) {
  // if (countCharacter >= 0) {
    // var password = "";
    var uLetters = upperLetters (countUpper)
    console.log (uLetters)
    var lLetters = lowerLetters (countCharacter)
    console.log (lLetters)
    var numbs = numbers (countNumeric)
    console.log (numbs)
    var spec = special (countSpecial)
    console.log (spec)

    window.alert("Password is " + uLetters + lLetters + numbs + spec)
}



var askSpecial = function () {

  var confirmSpecial = window.confirm("Do you want to have special characters? " + countCharacter + " characters remaining.");

  //if true, ask how many upper case letters. must be less than count character
  //first if denies bad answers
  if (confirmSpecial) {
    countSpecial = window.prompt("How many characters should be special? ")
    countSpecial=parseInt(countSpecial, 10)
    if (countSpecial === "" || countSpecial === null ||
    typeof countSpecial !== "number" || isNaN(countSpecial)) {
        window.alert("You need to provide a valid answer! Please try again.");
        return askSpecial();
    }
  
  // if client picks a number less than count Character
    if (countSpecial <= countCharacter) {
      countCharacter = countCharacter - countSpecial
      console.log("special character count " + countSpecial);
      console.log("This is the amount of characters left: " + countCharacter)
      generatePassword();
    }

    else {
      generatePassword();
    }
  }
}

var askNumeric = function () {
  var confirmNumeric = window.confirm("Do you want to have numbers? " + countCharacter + " characters remaining.");

  //if true, ask how many upper case letters. must be less than count character
  //first if denies bad answers
  if (confirmNumeric) {
    countNumeric = window.prompt("How many characters should be numbers? ")
    countNumeric=parseInt(countNumeric, 10)
    if (countNumeric === "" || countNumeric === null ||
    typeof countNumeric !== "number" || isNaN(countNumeric) || countNumeric >= countCharacter) {
        window.alert("You need to provide a valid answer! Please try again.");
        return askNumeric();
    }
  
  // if client picks a number less than count Character
    if (countNumeric <= countCharacter) {
      countCharacter = countCharacter - countNumeric
      console.log("numeric character count " + countNumeric);
      console.log("This is the amount of characters left: " + countCharacter)
      askSpecial();
    }
  }

  else {
    askSpecial();
    console.log("This is the amount of characters left: " + countCharacter)
  }
}

var askUpper = function () {
  //ask if user wants to have upper case letters
  var confirmUpper = window.confirm("Do you want to have uppercase letters?");

  //if true, ask how many upper case letters. must be less than count character
  //first if denies bad answers
  if (confirmUpper) {
    countUpper = window.prompt("How many characters should be upper case? " + countCharacter + " characters remaining.")
    countUpper=parseInt(countUpper, 10)
    if (countUpper === "" || countUpper === null ||
    typeof countUpper !== "number" || isNaN(countUpper) || countUpper > countCharacter) {
        window.alert("You need to provide a valid answer! Please try again.");
        return askUpper();
    }
  
  // if client picks a number less than count Character
    if (countUpper <= countCharacter) {
      countCharacter = countCharacter - countUpper
      console.log("uppercase character count " + countUpper);
      console.log("This is the amount of characters left: " + countCharacter)
      askNumeric();
    }
  }
  else {
    console.log("This is the amount of characters left: " + countCharacter)
    askNumeric();
    
  }
}

var passGen = function () {
  //ask client how many chacters the passwork should be, specify 8-128
  countCharacter = window.prompt("How many characters should your password be? (8-128) unused characters will be lowercase letters.")
  countCharacter=parseInt(countCharacter, 10)
   // Conditional Recursive Function Call
  if (countCharacter === "" || countCharacter === null || countCharacter < 8 
  || countCharacter > 128 || typeof countCharacter !== "number" || isNaN(countCharacter)) {
      window.alert("You need to provide a valid answer! Please try again.");
      return passGen();
  }

// if client picks "a number between 8 and 128
  if (countCharacter >= 8 && countCharacter <= 128) {
    askUpper();
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passGen);
