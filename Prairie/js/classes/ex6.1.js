class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    // Méthode pour déplacer le cercle
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    // Getter pour calculer la surface du cercle
    get surface() {
        return Math.PI * this.radius ** 2;
    }
}

// ---- Test du code ----
const myCircle = new Circle(5, 10, 3); // Création d'un cercle avec x=5, y=10, radius=3
console.log(`Position initiale : (${myCircle.xPos}, ${myCircle.yPos})`);
console.log(`Surface initiale : ${myCircle.surface.toFixed(2)}`); // Affichage avec 2 décimales

// Déplacement du cercle
myCircle.move(4, -2);
console.log(`Nouvelle position : (${myCircle.xPos}, ${myCircle.yPos})`);

// Vérification de la surface (elle ne change pas avec le déplacement)
console.log(`Surface après déplacement : ${myCircle.surface.toFixed(2)}`);
