const passwordBox = document.getElementById("password");

const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + numbers + symbols;

function createpassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];


    while (password.length < passwordLength) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
}
function copypassword() {
    if (passwordBox.value === "") {
        alert("No password to copy!");
        return;
    }
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}