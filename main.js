"use strict"
const rl = require("readline-sync");

function passwordGenerator() {
    const passLen = parseInt(rl.question("Введите длину пароля: "));
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    if(isNaN(passLen)) {
        console.log("Вы ввели некорректную длину!");
        console.log(passwordGenerator());
    }
    let password = [];
    for(let i = 0; i < passLen; i++) {
        let randomCharacter = lowercaseCharacters[Math.floor(Math.random() *
            lowercaseCharacters.length)]
        let randomFloat = Math.random(); // создаем рандомную переменную для определения будет ли буква заглавной
        if (randomFloat > 0.5) {
            password.push(randomCharacter.toUpperCase());
        }
        else {
            password.push(randomCharacter);
        }
    }
    return password.join("");
}
console.log(passwordGenerator());