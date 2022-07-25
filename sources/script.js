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

function generatePassword() {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var specialChars = "!@#$%^&*(),.<>";
    var allStrings = "";
    var message = "";
    var userPassword = [];
    var pwdLength = 0;
    let lowerCase = false;
    let upperCase = false;
    let userNumber = false;
    let special = false;

    function addLowerCase() {
        var randLower = upperChars.charAt(Math.floor(Math.random() * 26)).toLowerCase();
        userPassword.push((randLower).toLowerCase());
    }

    function addUpperCase() {
        var randUpper = upperChars.charAt(Math.floor(Math.random() * 26));
        userPassword.push(randUpper);
    }

    function addNumber() {
        var randNum = numChars.charAt(Math.floor(Math.random() * 10));
        userPassword.push(randNum);
    }

    function addSpecial() {
        var randSpecial = specialChars.charAt(Math.floor(Math.random() * 14));
        userPassword.push(randSpecial);
    }
    // Ask user for information
    // Input validation
    while (lowerCase == false && upperCase == false && userNumber == false && special == false) {
        while (!(pwdLength >= 8 && pwdLength <= 128)) {
            pwdLength = prompt(`${message} Please enter a password length between 8 and 128: `);
            if (!isNaN(pwdLength)) {
                if (!(pwdLength <= 128 && pwdLength >= 8)) {
                    message = "Number out of range.";
                    continue;
                }
            } else if (isNaN(pwdLength)) {
                message = "Please enter a number.";
                continue;
            }
        }
        lowerCase = confirm("Would you like to have lower case characters? ");
        upperCase = confirm("Would you like to have upper case characters? ");
        userNumber = confirm("Would you like to have numeric characters? ");
        special = confirm("Would you like to have special characters? ");
        if (lowerCase == false && upperCase == false && userNumber == false && special == false) {
            alert("You need to pick something.");
        }
    }
    // Make sure at least one of each selected character exists
    if (lowerCase) {
        addLowerCase();
        allStrings += upperChars.toLowerCase();
    }
    if (upperCase) {
        addUpperCase();
        allStrings += upperChars;
    }
    if (userNumber) {
        addNumber();
        allStrings += numChars + numChars;
    }
    if (special) {
        addSpecial();
        allStrings += specialChars + specialChars;
    }
    // Fill in the rest of the characters
    for (i = userPassword.length; i < pwdLength; i++) {
        var newChar = allStrings.charAt(Math.floor(Math.random() * allStrings.length));
        userPassword.push(newChar);
    }
    // Shuffle characters
    for (i = 0; i < userPassword.length; i++) {
        var randIndex = Math.floor(Math.random() * userPassword.length);
        var temp = userPassword[i];
        userPassword[i] = userPassword[randIndex];
        userPassword[randIndex] = temp;
    }
    // Convert to string
    var randPassword = "";
    for (i = 0; i < userPassword.length; i++) {
        randPassword += userPassword[i];
    }
    return randPassword;
}