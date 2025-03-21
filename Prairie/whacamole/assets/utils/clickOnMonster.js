import createDomElement from "./functions/createElement.js";
import randomElment from "./functions/random.js";

const POINT = [];  // Déclaré globalement pour conserver le score

export default function monsterAppearance() {
    // Création de la div et de l'image
    const CREATE_DIV_CONTAIN_IMAGE = createDomElement('div');
    CREATE_DIV_CONTAIN_IMAGE.classList.add('container-div-img');
    
    const DISPLAY_MONSTER_IN_DIV = createDomElement('img');
    DISPLAY_MONSTER_IN_DIV.src = 'assets/images/chopper.svg';
    DISPLAY_MONSTER_IN_DIV.classList.add('redim-image-monster');

    const CONTAINER_GAME_SELECT = document.querySelector('#container-game');

    // Récupère une position aléatoire dans les enfants de #container-game
    const postionMonster = randomElment(0, CONTAINER_GAME_SELECT.children.length);
    
    // Sélectionner l'élément du cercle en fonction de la position aléatoire
    const SELECT_CIRCLE_ID = document.querySelector(`#circle-${postionMonster}`);
    
    // Ajouter le monstre dans le cercle
    SELECT_CIRCLE_ID.appendChild(CREATE_DIV_CONTAIN_IMAGE);
    CREATE_DIV_CONTAIN_IMAGE.appendChild(DISPLAY_MONSTER_IN_DIV);

    // 🔥 Ajout de l'écouteur d'événement au monstre
    DISPLAY_MONSTER_IN_DIV.addEventListener('click', () => {
        POINT.push(2); // Ajoute 2 points
        displayScore(); // Met à jour le score affiché

        // Applique l'animation CSS avant de supprimer l'élément
        DISPLAY_MONSTER_IN_DIV.style.animation = "disappear 0.5s ease-out forwards";

        setTimeout(() => {
            CREATE_DIV_CONTAIN_IMAGE.remove(); // Supprime le monstre après l'animation
        }, 500);
    });

    // Log les informations
    console.log(`Le monstre se positionne dans le cercle ${postionMonster}`);
    console.log(`Sélection du cercle :`, SELECT_CIRCLE_ID);
    console.log(`ID du cercle sélectionné : ${SELECT_CIRCLE_ID.id}`);
}

// 🚀 Exécution en boucle toutes les 2 secondes
// setInterval(() => {
//     monsterAppearance();
// }, 2000);

// Fonction pour afficher le score
function displayScore() {
    const SCORE_DISPLAY = document.querySelector('.score');  // Sélectionne le <p> du score

    if (!SCORE_DISPLAY) {
        console.error("L'élément score n'a pas été trouvé !");
        return;
    }

    // Met à jour le texte du score en additionnant tous les points
    SCORE_DISPLAY.textContent = `Score : ${POINT.reduce((a, b) => a + b, 0)}`;
}
