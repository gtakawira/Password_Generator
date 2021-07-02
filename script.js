// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts for  Length and Criteria
function generatePassword(){{
  var howLongEl =parseInt( window.prompt('How long do you want the password? Number of characters allowed: 8-128', '8'));
  //If it meets Length then proceed TO Character type
  if (howLongEl>= 8 && howLongEl<=128){
    characterType();
      
  }
    //CANCEL
  else 
  alert("Characters allowed: 8-128. The generater has been cancelled!!!")
  
 
}
// Prompts for character types
function characterType() {
  alert("Select the character types from lowercase, uppercase, numeric, and/or special characters. You have to select at least one ")
  var lc =confirm("Lowercase?");
  var uc =confirm("Uppercase?");
  var nm =confirm("Numeric?");
  var sc =confirm("Special Characters?");
  
    //select  at least one to proceed
    if (lc||uc||nm||sc){
      pooling()
    }
    else
    alert("You have to select at least one character type. Goodbye!")
  
      //password pools
    function pooling(){
    var lowercase=["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numeric=["1","2","3","4","5","6","7","8","9","0"]
    var special=["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"]
    var  password=[""]
    var pool=[""]
    console.log(lowercase)

  //Pooling the requested elements
    if (lc){pool=pool.concat(lowercase);
    
    //making sure each selected character is selected in final word
      password= ( password + lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (uc){pool=pool.concat(uppercase)
      password=(  password + uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (nm) {pool=pool.concat(numeric)
      password=(  password + numeric[Math.floor(Math.random() * numeric.length)]);
    }
    if (sc) {pool=pool.concat(special)
      password=(  password + special[Math.floor(Math.random() * special.length)]);
    }
  

//selecting the correct number password elements
 
  for (let i = password.length; i < howLongEl; i++) {  password=( password + pool[Math.floor(Math.random() * pool.length)]);
  } 

  //Write Password
  writePassword()
  function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
     
}
  
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

