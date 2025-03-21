import createDomElement from "./functions/createElement.js";
import randomElment from "./functions/random.js";

// Variable pour garder une référence à l'intervalle
let gameInterval;
let score = 0; // Score du jeu

// Fonction pour l'apparition du monstre
export default function monsterAppearance() {
    // Création de la div et de l'image du monstre
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
        console.log(`Tu as cliqué sur le monstre !`);
        score += 2;  // Ajoute 2 points pour chaque clic sur le monstre
        displayScore(); // Met à jour le score

        DISPLAY_MONSTER_IN_DIV.style.animation = "disappear 0.5s ease-out forwards";

        setTimeout(() => {
            CREATE_DIV_CONTAIN_IMAGE.remove();  // Supprime le monstre après l'animation
        }, 500);
    });

    // Log les informations
    console.log(`Le monstre se positionne dans le cercle ${postionMonster}`);
    console.log(`Sélection du cercle :`, SELECT_CIRCLE_ID);
    console.log(`ID du cercle sélectionné : ${SELECT_CIRCLE_ID.id}`);
}

// Fonction pour afficher le score
function displayScore() {
    const SCORE_DISPLAY = document.querySelector('.score');

    if (SCORE_DISPLAY) {
        // Met à jour l'affichage du score
        SCORE_DISPLAY.textContent = `Score : ${score}`;
    }
}

// Fonction pour démarrer le jeu
function startGame() {
    // Démarre l'intervalle pour faire apparaître les monstres toutes les 2 secondes
    gameInterval = setInterval(() => {
        monsterAppearance();  // Appele la fonction pour faire apparaître un monstre
    }, 2000);
}

// Fonction pour arrêter le jeu
function stopGame() {
    if (gameInterval) {
        clearInterval(gameInterval);  // Arrête l'intervalle
        console.log('Jeu arrêté');
    }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    // Arrêter l'intervalle et réinitialiser le score
    stopGame();
    score = 0;  // Réinitialise le score
    displayScore();  // Met à jour l'affichage du score

    // Supprimer tous les monstres visibles (les éléments dans #container-game)
    const containers = document.querySelectorAll('.container-div-img');
    containers.forEach(container => container.remove());

    console.log('Jeu réinitialisé');
}

// Sélection des boutons
document.addEventListener('DOMContentLoaded', () => {
    // Sélection des boutons
    const START_BUTTON = document.querySelector('.button-start');
    const STOP_BUTTON = document.querySelector('.button-stop');
    const RESET_BUTTON = document.querySelector('.button-reset');

    // Ajout des écouteurs d'événements
    if (START_BUTTON) {
        START_BUTTON.addEventListener('click', () => {
            startGame();  // Démarre le jeu quand le bouton start est cliqué
        });
    }

    if (STOP_BUTTON) {
        STOP_BUTTON.addEventListener('click', () => {
            stopGame();  // Arrête le jeu quand le bouton stop est cliqué
        });
    }

    if (RESET_BUTTON) {
        RESET_BUTTON.addEventListener('click', () => {
            resetGame();  // Réinitialise le jeu quand le bouton reset est cliqué
        });
    }
});

