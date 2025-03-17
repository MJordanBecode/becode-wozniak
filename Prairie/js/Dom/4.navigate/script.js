let selectOlList =  document.querySelector('ol');
// console.log(selectOlList.children[0]);

let firstOlList = selectOlList.children[0];
let lastOlList  = selectOlList.children[selectOlList.children.length - 1];

console.log(firstOlList)
console.log("1 : ", firstOlList, "2 : ", lastOlList);

// switch de place : 

let lastOlClone = lastOlList.cloneNode(true);

// Remplacer firstOlList par lastOlClone
selectOlList.replaceChild(lastOlClone, firstOlList);

// Insérer firstOlList à la place du dernier
selectOlList.replaceChild(firstOlList, lastOlList);

// H2 element : 

let selectAllSection = document.querySelectorAll('section');

// Sélectionner les <h2> des sections 2 et 3
let selectH2OfThirdSection = selectAllSection[2].querySelector('h2');
let selectH2OfSecondSection = selectAllSection[1].querySelector('h2');

// Vérifier que les éléments existent avant d'agir
if (selectH2OfThirdSection && selectH2OfSecondSection) {
    // Récupérer les parents des h2
    let parentSecondSection = selectH2OfSecondSection.parentNode;
    let parentThirdSection  = selectH2OfThirdSection.parentNode;

    // Créer des clones pour éviter les problèmes de déplacement
    let cloneH2Second = selectH2OfSecondSection.cloneNode(true);
    let cloneH2Third  = selectH2OfThirdSection.cloneNode(true);

    // Remplacer les h2 dans leurs nouvelles sections
    parentSecondSection.replaceChild(cloneH2Third, selectH2OfSecondSection);
    parentThirdSection.replaceChild(cloneH2Second, selectH2OfThirdSection);
}


// suppression de la dernière section 

let lastSection = selectAllSection[selectAllSection.length - 1]; // Prend la dernière section

console.log('ici ', lastSection)
if (lastSection && lastSection.lastElementChild) {
    lastSection.removeChild(lastSection.lastElementChild); // Supprime le dernier enfant
}