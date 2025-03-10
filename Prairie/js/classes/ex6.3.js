class Rectangle {
    constructor(posXHautGauche, posYHautGauche, largeur, longueur) {
        this.posXHautGauche = posXHautGauche;
        this.posYHautGauche = posYHautGauche;
        this.largeur = largeur;
        this.longueur = longueur;
    }

    // Méthode pour vérifier si ce rectangle entre en collision avec un autre
    collision(autreRectangle) {
        const coinBasDroiteX = this.posXHautGauche + this.largeur;
        const coinBasDroiteY = this.posYHautGauche + this.longueur;
        const autreBasDroiteX = autreRectangle.posXHautGauche + autreRectangle.largeur;
        const autreBasDroiteY = autreRectangle.posYHautGauche + autreRectangle.longueur;

        // Vérifier si les rectangles ne se chevauchent PAS
        if (this.posXHautGauche > autreBasDroiteX || autreRectangle.posXHautGauche > coinBasDroiteX) {
            return false; // Pas de chevauchement horizontal
        }
        if (this.posYHautGauche > autreBasDroiteY || autreRectangle.posYHautGauche > coinBasDroiteY) {
            return false; // Pas de chevauchement vertical
        }
        return true; // Il y a une collision !
    }
}

// Fonction pour générer un rectangle aléatoire
function genererRectangleAleatoire() {
    const x = Math.floor(Math.random() * 500); // Position X aléatoire
    const y = Math.floor(Math.random() * 500); // Position Y aléatoire
    const largeur = Math.floor(Math.random() * 50) + 10; // Largeur aléatoire (entre 10 et 60)
    const longueur = Math.floor(Math.random() * 50) + 10; // Longueur aléatoire (entre 10 et 60)
    return new Rectangle(x, y, largeur, longueur);
}

// Générer 1000 rectangles aléatoires
const rectangles = [];
for (let i = 0; i < 1000; i++) {
    rectangles.push(genererRectangleAleatoire());
}

// Vérifier quelles paires de rectangles se chevauchent
const pairesEnCollision = [];
for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
        if (rectangles[i].collision(rectangles[j])) {
            pairesEnCollision.push([rectangles[i], rectangles[j]]);
        }
    }
}

// Afficher les rectangles en collision
console.log(`Nombre total de paires en collision : ${pairesEnCollision.length}`);
pairesEnCollision.forEach(([rect1, rect2], index) => {
    console.log(
        `Collision ${index + 1} :`,
        `Rectangle 1 en (${rect1.posXHautGauche}, ${rect1.posYHautGauche}) avec taille ${rect1.largeur}x${rect1.longueur}`,
        `entre en collision avec`,
        `Rectangle 2 en (${rect2.posXHautGauche}, ${rect2.posYHautGauche}) avec taille ${rect2.largeur}x${rect2.longueur}`
    );
});
