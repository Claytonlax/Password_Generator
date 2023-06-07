// Assignment code here
var passwordCriteria = prompt();

var choices1 = []
var generatorAlgoIndex = Math.floor(Math.random() * choices1);
choices1 = generatorAlgo[choices1]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
return(passwordCriteria)