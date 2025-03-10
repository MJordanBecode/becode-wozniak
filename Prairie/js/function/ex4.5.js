const prompt = require("prompt-sync")();

// Fonction pour calculer la distance entre deux points
function calcDistance(A, B) {
    let A1 = A[0];  // x1 de A
    let A2 = A[1];  // y1 de A
    let B1 = B[0];  // x2 de B
    let B2 = B[1];  // y2 de B

    // Calcul de la distance avec la formule
    let distance = Math.sqrt(Math.pow(B1 - A1, 2) + Math.pow(B2 - A2, 2));
    return distance;
}

// Fonction pour ajouter les coordonnées des points A et B
function addCoordinatePoints() {
    let i = 0;
    let A = [];
    let B = [];

    while (i < 4) {  // Nous avons besoin de 4 points au total (2 pour A et 2 pour B)
        if (i < 2) {  // Demander 2 points pour A
            let a = Number(prompt('Sélectionne un point pour A (x ou y) : '));
            A.push(a);
        } else {  // Demander 2 points pour B
            let b = Number(prompt('Sélectionne un point pour B (x ou y) : '));
            B.push(b);
        }
        i++;
    }

    return { A, B };  // Retourne les tableaux A et B
}

// Demander combien de points l'utilisateur veut
let askNumberOfPoint = Number(prompt("How many points do you need ? (2 for A and 2 for B) : "));

// Récupérer les points A et B
let { A, B } = addCoordinatePoints();

console.log("Les coordonnées de A sont : ", A);
console.log("Les coordonnées de B sont : ", B);

// Calculer la distance entre A et B
let distance = calcDistance(A, B);
console.log("La distance entre A et B est : ", distance);
