var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacter = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "^", "+", "-", "."];

 var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var approveLength = "";

var approveSpecialCharacter;
var approveNumberCharacter;
var approveLowercaseLetter;
var approveUppercaseLetter;

function generatePassword () {
  var passwordLength = (prompt("Number of characters to be included in your password?"));

  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Input must be between 8-128 characters");
    var passwordLength = (prompt("Number of characters to be included in your password?"));
  }

  var approveSpecialCharacter = confirm();
  var approveNumberCharacter = confirm();
  var approveLowercaseLetter = confirm();
  var approveUppercaseLetter = confirm();
}

// var choices1 = [];
// var generatorAlgoIndex = Math.floor(Math.random() * choices1);
// choices1 = generatorAlgoIndex[choices1];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
return passwordCriteria;
