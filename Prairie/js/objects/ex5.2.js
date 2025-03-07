const prompt = require("prompt-sync")();
const term = require('terminal-kit').terminal;

/**
 * Fonction pour mélanger un tableau de manière aléatoire.
 * @param {*} tvSerie - Objet de série contenant un tableau d'acteurs.
 * @returns {Array} - Un tableau avec les acteurs mélangés.
 */
function randomizeCast(tvSerie) {
    let shuffledActors = [...tvSerie.ActorsName]; // Créer une copie du tableau des acteurs
    for (let i = shuffledActors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledActors[i], shuffledActors[j]] = [shuffledActors[j], shuffledActors[i]]; // Échange les éléments
    }
    return shuffledActors;
}


async function existProgram() {

    // Ask the user to press any key to exit
    term.moveTo(5, 22).white("\n                                        Press any key to exit...");

    // Wait for the user to press any key before closing the program
    await term.inputField('').promise;
    term.grabInput(false);  // Stop reading input (if any)
    term.clear();
    process.exit();  // Exit the program
}
/**
 * Demande des informations sur une série à l'utilisateur et les ajoute au tableau
 * @param {*} Name => string
 * @param {*} ProductionYear => Number
 * @param {*} ActorNames => Array of String
 * @param {*} ArrayFavoriteSerie => Stock des séries
 * @returns 
 */
async function askTvSeries(Name, ProductionYear, ActorNames, ArrayFavoriteSerie) {
    let FavoriteSerie = {
        'Name': `${Name}`,
        'ProductionYear': `${ProductionYear}`,
        'ActorsName': ActorNames
    }
    ArrayFavoriteSerie.push(FavoriteSerie);
    console.log(ArrayFavoriteSerie);
    return JSON.stringify(FavoriteSerie);
}

/**
 * Fonction principale qui gère l'interaction avec l'utilisateur
 */
async function main() {
    let Name; 
    let ProductionYear; 
    let ArrayFavoriteSerie = []; 
    let NumberOfSeries; 
    let i = 0;

    term.clear();
    // Set initial position for the prompt display
    term.moveTo(5, 3).brightCyan("********************************************************************************************");
    term.moveTo(5, 4).green("* What is your Favorite Series ? Give me the name, the production Year and names of the actor *");
    term.moveTo(5, 5).brightCyan("********************************************************************************************\n");

    // Demander combien de séries l'utilisateur aime
    NumberOfSeries = Number(prompt('                                        How many series do you like ? '));

    // Boucle pour recueillir des informations pour chaque série
    while (i < NumberOfSeries) {
        term.clear();
        term.move(10, 5).white(`Serie Number ${i + 1}`);
        term.moveTo(5, 7).white("                                        What is the name of the serie? : ");
        
        let Name = await term.inputField('').promise;
        if (typeof Name !== "string") {
            term.moveTo(5, 9).red("\n                                        The Name of the serie needs to be a String\n");
            return;
        }

        term.moveTo(5, 9).white('                                        What is the Production Year? ');
        let ProductionYear = Number(await term.inputField('').promise);
        if (isNaN(ProductionYear)) {
            term.moveTo(5, 13).red("\n                                        The Production Year needs to be a Number\n");
            return;
        }

        term.moveTo(5, 11).white('                                        How many Actors are there in your Serie? ');
        let NumberOfActor = Number(await term.inputField('').promise);
        if (!isNaN(NumberOfActor)) {
            let ActorNames = [];  // Créer un tableau vide à chaque itération pour les acteurs de la série
            let i = 0;
            while (i < NumberOfActor) {
                // Effacer la ligne actuelle pour les acteurs
                term.moveTo(5, 17 + i).eraseLine(); 
                term.moveTo(5, 17 + i).white('                                        What is the actor\'s name? ');

                let Actor = await term.inputField('').promise;
                ActorNames.push(Actor);
                i++;
            }
            // Appeler la fonction pour ajouter la série
            await askTvSeries(Name, ProductionYear, ActorNames, ArrayFavoriteSerie);
        }
        i++;
    }

    // Une fois les séries collectées, afficher un casting aléatoire pour une nouvelle série
    term.moveTo(5, 20).brightGreen("\n                                        Voici le tableau d'objet : ");
    console.log(ArrayFavoriteSerie);

    // Mélanger les acteurs de la dernière série ajoutée
    const randomizedCast = randomizeCast(ArrayFavoriteSerie[ArrayFavoriteSerie.length - 1]);

    // Afficher le casting mélangé
    term.moveTo(5, 22).brightMagenta("\n                                        New Randomized Cast: ");
    console.log(randomizedCast);

    existProgram()
    

}

main(); // Appeler la fonction principale pour exécuter le programme
