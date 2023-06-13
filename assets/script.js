var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "^",
  "+",
  "-",
  ".",
];

var lowercaseLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var approveNumberCharacter;
var approveLowercaseLetter;
var approveUppercaseLetter;
var approveSpecialCharacter;
var choices = [];
var createdPassword = "";

function generatePassword() {
  var passwordLength = prompt(
    "Number of characters to be included in your password?"
  );

  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Input must be between 8-128 characters");
    var passwordLength = prompt(
      "Number of characters to be included in your password?"
    );
  }

  var approveNumberCharacter = confirm(
    "Would you like to include Numeric Characters?"
  );
  var approveLowercaseLetter = confirm(
    "Would you like to include Lowercase Letters?"
  );
  var approveUppercaseLetter = confirm(
    "Would you like to include Uppercase Letters?"
  );
  var approveSpecialCharacter = confirm(
    "Would you like to include Special Charcters?"
  );

  if (
    !approveNumberCharacter &&
    !approveLowercaseLetter &&
    !approveUppercaseLetter &&
    !approveSpecialCharacter
  ) {
    alert("Atleast one parameter must be chosen");
    var approveNumberCharacter = confirm(
      "Would you like to include Numeric Characters?"
    );
    var approveLowercaseLetter = confirm(
      "Would you like to include Lowercase Letters?"
    );
    var approveUppercaseLetter = confirm(
      "Would you like to include Uppercase Letters?"
    );
    var approveSpecialCharacter = confirm(
      "Would you like to include Special Charcters?"
    );
  }

  if (approveNumberCharacter) {
    choices = choices.concat(number);
  }
  if (approveLowercaseLetter) {
    choices = choices.concat(lowercaseLetter);
  }
  if (approveUppercaseLetter) {
    choices = choices.concat(uppercaseLetter);
  }
  if (approveSpecialCharacter) {
    choices = choices.concat(specialCharacter);
  }

  for (var i = 0; i < passwordLength; i++) {
    createdPassword =
      createdPassword + choices[Math.floor(Math.random() * choices.length)];
  }
  return createdPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
