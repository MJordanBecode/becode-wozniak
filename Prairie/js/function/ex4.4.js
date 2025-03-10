const prompt = require("prompt-sync")();

function pickLearner(inputAr, n) {
    if (n > inputAr.length || n < 0) {
        console.log('The number is out of range. Please choose a valid number.');
        return null;
    }
    return inputAr[n];
}

const CLASS = ['Antoine', 'Ars', 'Hugo', 'Kamal', 'Liana', 'Jordan', 'Manu', 'Martin', 'Stéphane', 'Valentin', 'Inna'];

let Question = Number(prompt('Choose a number between 0 and ' + (CLASS.length - 1) + ': '));

let selectedLearner = pickLearner(CLASS, Question);
if (selectedLearner !== null) {
    console.log('Selected learner:', selectedLearner);
}
