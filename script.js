// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Prompts for  Length and Criteria
var howLongEl
function howLong(event){
  var howLongEl =parseInt( window.prompt('How long do you want the password? Number of characters allowed: 8-128', '8'));
  //If it meets Length then proceed TO Character type
  if (howLongEl>= 8 && howLongEl<=128){
    characterType();
    return
  }
  //second chance to meet length requirement
  else
  var howLongEl =parseInt( window.prompt(' Number of characters allowed: 8-128!!!!!', '8'))
  if (howLongEl>= 8 && howLongEl<=128){
    characterType();    
  }
    //CANCEL
  else 
  alert("The generater has been cancelled!!!")
  
  //console.log(howLongEl)
}
// Prompts for character types
function characterType() {
  alert("Select the character types from lowercase, uppercase, numeric, and/or special characters. You have to select at least one ")
  var lc =confirm("Lowercase?");
  console.log(lc)
  var uc =confirm("Uppercase?");
  console.log(uc)
  var nm =confirm("Numeric?");
  console.log(nm)
  var sc =confirm("Special Characters?");
  console.log(sc)
  
}
console.log(howLongEl)

// Add event listener to generate button
generateBtn.addEventListener("click", howLong);

