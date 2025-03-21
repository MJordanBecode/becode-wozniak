import createDomElement from "../utils/functions/createElement.js";  // Importe la fonction
import createCircleOfGame from "../utils/createCircleElementGame.js";
export default function createBackGroundGame() {
    const CONTAINER_GAME_SELECT = document.querySelector('#container-game');
    console.log(CONTAINER_GAME_SELECT);

    const SELECT_DIV_ALL_CONTAINER = document.querySelector('#container-all-game');  // Sélectionne l'élément <main>

    const NEW_DIV = createDomElement('div'); // crée une div qui va contenir l'explication du jeu 

    const NEW_H2 = createDomElement('h4');
    NEW_H2.textContent = "Explication du jeu : "
    NEW_DIV.appendChild(NEW_H2);

    const NEW_P = createDomElement('p');
    NEW_P.innerHTML = 'Pour commencer à jouer, vous devez appuyer sur START'
    NEW_DIV.appendChild(NEW_P);
    // Ajoute une classe à la div => leaderBoard
    NEW_DIV.classList.add('leaderBoard');
    
    // Ajoute le <p> dans <main>
    SELECT_DIV_ALL_CONTAINER.appendChild(NEW_DIV);  // Append l'élément <p> dans <main>
    
    createCircleOfGame(); // appelle de la fonction qui crée les cercle 
}
