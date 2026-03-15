"use strict"
const rl = require("readline-sync");
function question(answer){
    if(answer == "нет") return false;
    return true;
}

const options = {
        length: (function passLength() {
            const passLen = Number(parseInt(rl.question("Введите длину пароля: ")));
            if(!isNaN(passLen)) return passLen;
            return passLength();
        })(),
        useUppercase: (() => {
            let answer = rl.question(`Использовать верхний регистр?(по умолчанию ДА)\nда/нет: `).toLowerCase();
            return question(answer);
        })(),
        useNumbers: (() => {
            let answer = rl.question(`Использовать цифры?(по умолчанию ДА)\nда/нет: `).toLowerCase();
            return question(answer);
        })(),
    };

function passwordGenerator() {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if(options.useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(options.useNumbers) chars += "1234567890"
    let passLen = options.length;
    let password = [];
    for(let i = 0; i < passLen; i++) {
        let randomCharacter = chars[Math.floor(Math.random() *
            chars.length)]
        password.push(randomCharacter);
    }
    return password.join("");
}
console.log(passwordGenerator());