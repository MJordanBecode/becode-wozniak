const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

let selectDivSectionForDynamicSquare = document.querySelector('.displayedsquare-wrapper');
console.log(selectDivSectionForDynamicSquare);

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const selectUl = document.querySelector('ul');
console.log(selectUl);

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', function() {
    // Clone l'élément square, mais cette fois avec les classes
    let selectDivColor = actionSquare.cloneNode(true);  // true pour cloner avec les enfants (et donc les classes)

    // Ajoute la div clonée dans la section
    selectDivSectionForDynamicSquare.appendChild(selectDivColor);
    
    // Crée un nouvel <li> à chaque clic
    let createLi = document.createElement('li');
    
    // Affiche l'heure écoulée dans le nouvel <li>
    let getTime = getElapsedTime();
    createLi.innerHTML = `${getTime}`;
    
    // Ajoute le nouvel <li> à la liste
    selectUl.appendChild(createLi);

    console.log('voici le temps : ', getTime);
    console.log('clone : ', selectDivColor);
    
    // Ajoute un gestionnaire d'événements pour le clic sur la nouvelle div clonée
    selectDivColor.addEventListener('click', function() {
      alert(`Couleur de la div cliquée : ${selectDivColor.classList[1]}`);  // Affiche la classe de couleur de la div
    });
  });
}

// key : spacebar 
const selectBody = document.querySelector('body');
let isColorChanged = false;  // Variable pour suivre l'état de la couleur

// Fonction pour changer la couleur de fond avec la barre d'espace
function changeColorWithSpaceBarKey() {
  document.addEventListener('keydown', function(event) {
        if (event.key === ' ') {
      if (isColorChanged) {
        // Si la couleur a déjà été changée, on remet la couleur de fond à "none"
        selectBody.style.backgroundColor = '';
        console.log('Couleur réinitialisée');
      } else {
        // Si la couleur n'a pas encore été changée, on change la couleur
        selectBody.style.backgroundColor = 'blue';
        console.log('Couleur changée en bleu');
      }
      // Inverse l'état de la variable isColorChanged
      isColorChanged = !isColorChanged;
    } else {
      console.log('Sale noob');
    }
  });
}

// Appeler la fonction lorsque le DOM est complètement chargé
window.onload = function() {
  changeColorWithSpaceBarKey();
};

// Nouveaux gestionnaires pour les touches "l" et "s"

// Supprimer les éléments <li> lorsque "l" est pressé
document.addEventListener('keydown', function(event) {
  if (event.key === 'l') {
    // Utilisation d'une boucle while pour éviter les problèmes liés à la modification du DOM pendant l'itération
    while (selectUl.firstChild) {
      selectUl.removeChild(selectUl.firstChild);
    }
    console.log('Tous les <li> ont été supprimés.');
  }
});

// Supprimer les carrés lorsque "s" est pressé
document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
    // Utilisation d'une boucle while pour supprimer toutes les divs générées
    while (selectDivSectionForDynamicSquare.firstChild) {
      selectDivSectionForDynamicSquare.removeChild(selectDivSectionForDynamicSquare.firstChild);
    }
    console.log('Tous les carrés ont été supprimés.');
  }
});
