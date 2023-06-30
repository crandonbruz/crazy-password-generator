// prompts for length, cap, lower, special, numbers

const numArray = [1,2,3,4,5,6,7,8,9,0];
const special = ["!", "#", "$", "&", "(", ")", "+", ",", "=", ">", "<", "?", "@", "*"];
const tallLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var userInput = []
    function doOver() {
      var numbers = confirm("Would you like to include numbers into your password?")
      if (numbers) {
        userInput = userInput.concat(numArray)
      }

      var speCharacters = confirm("Would you like to include special characters into your password?")
      if (speCharacters) {
        userInput = userInput.concat(special)
      }

      var tall = confirm("Would you like to include uppercase letters into your password?")
      if (tall) {
        userInput = userInput.concat(tallLetter)
      }

      var lower = confirm("Would you like to include lowercase letters into your password?")
      if (lower) {
        userInput = userInput.concat(lowLetter)
      }
    }

  var characterCount = prompt("How many characters would you like in your password?")
  characterCount = parseInt(characterCount)
  
  while (characterCount < 8 || characterCount > 128) {
    alert("That number is not between 8 and 128. Please enter a correct number or else.");
    characterCount = parseInt(prompt("How many characters would you like in your password?"));
  }
  
  doOver()
  while (userInput.length === 0) {
    alert("Moron, do you want a password or not?")
    doOver()
  }
  console.log(userInput);

}






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
