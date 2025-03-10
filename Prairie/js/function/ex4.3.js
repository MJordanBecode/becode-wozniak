const prompt = require("prompt-sync")();


function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}


function multiRand(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(rand10());
    }
    return randomNumbers;
}

const num = prompt("Combien de nombres aléatoires souhaitez-vous générer ? ");
const n = parseInt(num, 10);

if (!isNaN(n) && n > 0) {
    console.log("Nombres générés :", multiRand(n));
} else {
    console.log("Veuillez entrer un nombre valide.");
}