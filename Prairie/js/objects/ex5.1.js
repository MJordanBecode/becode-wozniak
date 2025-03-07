const prompt = require("prompt-sync")();
const term = require('terminal-kit').terminal;
/**
 * 
 * @param {*} Name => string
 * @param {*} ProductionYear => Number
 * @param {*} ActorNames => Array of String
 * @param {*} ArrayFavoriteSerie => Stock of the object 
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

async function existProgram() {

      // Ask the user to press any key to exit
      term.moveTo(5, 22).white("\n                                        Press any key to exit...");

      // Wait for the user to press any key before closing the program
      await term.inputField('').promise;
      term.grabInput(false);  // Stop reading input (if any)
      term.clear();
      process.exit();  // Exit the program
}

async function main() {
    let Name; let ProductionYear; let ActorNames = []; let ArrayFavoriteSerie = []; let NumberOfSeries; let i = 0;
    term.clear();
    // Set initial position for the prompt display
    term.moveTo(5, 3).brightCyan("********************************************************************************************");
    term.moveTo(5, 4).green("* What Your Favorite Series ? Give me the name, the production Year and names of the actor *");
    term.moveTo(5, 5).brightCyan("********************************************************************************************\n");

    NumberOfSeries = Number(prompt('                                        How many series do you like ? '));

    while (i < NumberOfSeries) {
        term.clear();
        term.move(10,5).white(`Serie Number ${i+1}`)
        term.moveTo(5, 7).white("                                        What is the name of the serie? : ");
        
        let Name = await term.inputField('').promise;
        if (typeof Name !== "string") {
            term.moveTo(5, 9).red("\n                                        The Name of the serie needs to be a String\n");
            existProgram()
            return;
        }

        term.moveTo(5, 9).white('                                        What is the Production Year? ');
        let ProductionYear = Number(await term.inputField('').promise);
        if (isNaN(ProductionYear)) {
            term.moveTo(5, 13).red("\n                                        The Production Year needs to be a Number\n");
            existProgram()
            return;
        }

        term.moveTo(5, 11).white('                                        How many Actors are there in your Serie? ');
        let NumberOfActor = Number(await term.inputField('').promise);
        if (!isNaN(NumberOfActor)) {
            let i = 0;
            while (i < NumberOfActor) {
                // Only erase the actor input line
                term.moveTo(5, 17 + i).eraseLine(); // Erase the current line where we ask the actor's name
                term.moveTo(5, 17 + i).white('                                        What is the actor\'s name? ');

                let Actor = await term.inputField('').promise;
                ActorNames.push(Actor);
                i++
            }
        }

        askTvSeries(Name, ProductionYear, ActorNames, ArrayFavoriteSerie);
        i++
    }

    term.moveTo(5, 20).brightGreen("\n                                        Voici le tableau d'objet : ");
    console.log(ArrayFavoriteSerie);

    existProgram()
}

main(); // Call the async main function to run the program
