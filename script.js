// Assignment code here
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumber = "0123456789";
var charSpecial = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
var charCollector = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 


function generatePassword() {
  var passwordPrompt = parseInt(
    window.prompt("Choose password length from 8-128 characters.")
  );
  console.log(passwordPrompt) 

    if (passwordPrompt >= 8 && passwordPrompt <= 128)
      var confirmCharNumber = confirm("Do you want to include numbers?");
      console.log(confirmCharNumber)
      var confirmCharUpper = confirm("Do you want to include upper case letters?");
      console.log(confirmCharUpper)
      var confirmCharLower = confirm("Do you want to include lower case letters?");
      console.log(confirmCharLower)
      var confirmCharSpecial = confirm("Do you want to include special characters");
      console.log(confirmCharSpecial)
      
  if (confirmCharUpper === true) {
    charCollector = charCollector + charUpper;
  }

  if (confirmCharLower === true) {
    charCollector = charCollector + charLower;
  }

  if (confirmCharSpecial === true) {
    charCollector = charCollector + charSpecial
  }

  if (confirmCharNumber === true) {
    charCollector = charCollector + charNumber
    console.log
  }

  // prompt user for password criteria


  // Need to use .length and random.Math somewhere...JV

console.log(charCollector)
  return "Generated Password " + charCollector;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
