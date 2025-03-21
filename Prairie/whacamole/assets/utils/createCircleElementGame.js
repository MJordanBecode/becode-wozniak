import createDomElement from "./functions/createElement.js";

let DEFAULT_NUMBER_CIRCLE = 12; // initialisation du nombre de cercle par défaut (donc au commencement du jeu);
export default function createCircleOfGame(number){ // prend un param number qui va définir le nombre de fois qu'on va itérer 

    for(let i = 0; i < DEFAULT_NUMBER_CIRCLE ; i++){ // compare si i est plus petit que default et s'il est plus petit le programme boucle 
        const SELECT_GAME_CONTAINER = document.querySelector('#container-game'); // selectionne dans ma page l'id container-game
        const CREATE_CIRCLE_DIV = createDomElement('div'); // ajoute une div à chaque itération

        CREATE_CIRCLE_DIV.classList.add('style-circle');
        CREATE_CIRCLE_DIV.id = `circle-${i}`

        SELECT_GAME_CONTAINER.appendChild(CREATE_CIRCLE_DIV);
    }
}