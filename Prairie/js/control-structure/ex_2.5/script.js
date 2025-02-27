const prompt = require('prompt-sync')();

let favoriteNumber = prompt('Choose your favorite number: ');
favoriteNumber = Number(favoriteNumber);

if (!isNaN(favoriteNumber)) {
    while (favoriteNumber !== 42) {
        favoriteNumber = Number(prompt('Choose your favorite number: '));
    }
    console.log('Congratulations! 42 is the right number.');
} else {
    console.log('Please enter a valid number.');
}
