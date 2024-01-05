const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passOne = document.getElementById("pw-one");
const passTwo = document.getElementById("pw-two");

const generate = document.getElementById("gen-btn");

passOne.textContent = "blue";
passTwo.textContent = "green";

// function to generate random passwords
// needs to generate two unique passwords at once

function randomPassword() {
    let password = "";
    //loop through the characters array
    for(let i = 0; i < 15; i++) {
        let input = Math.floor(Math.random() * characters.length);
        password += characters[input];
    }
    return password;
}

// function makePassword() {
    
// }

//button click
generate.addEventListener("click", function() {
    const newPassOne = randomPassword();
    const newPassTwo = randomPassword();

    passOne.textContent = newPassOne;
    passTwo.textContent = newPassTwo;
});

