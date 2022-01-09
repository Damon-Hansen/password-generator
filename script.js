/* Assignment code here
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

function generatePassword() {
  var passwordLength = window.prompt(
    "How long would you like your password to be?"
  );

  var passwordLower = window.prompt(
    "Would you like to use lower case letters?"
  );

  var passwordUpper = window.prompt(
    "Would you like to use upper case letters?"
  );

  var passwordNumber = window.prompt(
    "Would you like to use numbers?"
  );

  var passwordSpecial = window.prompt(
    "Would you like to use special characters?"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    if (passwordLower === "yes" || 
    passwordUpper === "yes" || 
    passwordNumber === "yes" || 
    passwordSpecial === "yes") 
    {
      //valid
      // var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
      var charset = "";
        if (passwordLower === "yes") {
          charset = charset + "abcdefghijklmnopqrstuvwxyz";
        }
        if (passwordUpper === "yes") {
          charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (passwordNumber === "yes") {
          charset = charset + "0123456789";       
        }
        if (passwordSpecial === "yes") {
          charset = charset + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        
      var retValue = "";
      for (var i = 0, x = charset.length; i < passwordLength; ++i) {
        retValue += charset.charAt(Math.floor(Math.random() * x ));
      }
      return retValue;
    }  else {
      window.alert("You must type 'yes' to at least one of the four options!"); 
      }
  }   else {
      window.alert("Please choose a number between 8 and 128");
  }
}


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
