class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    // Méthode pour vérifier si deux rectangles se chevauchent
    collides(otherRectangle) {
        // Calcul des coins inférieurs droits des deux rectangles
        const thisBottomRightX = this.topLeftXPos + this.width;
        const thisBottomRightY = this.topLeftYPos + this.length;
        const otherBottomRightX = otherRectangle.topLeftXPos + otherRectangle.width;
        const otherBottomRightY = otherRectangle.topLeftYPos + otherRectangle.length;

        // Vérification des conditions de non-collision
        if (this.topLeftXPos > otherBottomRightX || otherRectangle.topLeftXPos > thisBottomRightX) {
            return false; // L'un est complètement à droite de l'autre
        }

        if (this.topLeftYPos > otherBottomRightY || otherRectangle.topLeftYPos > thisBottomRightY) {
            return false; // L'un est complètement en dessous de l'autre
        }

        return true; // Sinon, les rectangles se chevauchent
    }
}

// ---- TESTS ----
const rect1 = new Rectangle(2, 2, 4, 4);
const rect2 = new Rectangle(4, 4, 4, 4);
const rect3 = new Rectangle(10, 10, 3, 3);
const rect4 = new Rectangle(5, 2, 2, 6);

console.log(rect1.collides(rect2)); // true (se chevauchent partiellement)
console.log(rect1.collides(rect3)); // false (loin l'un de l'autre)
console.log(rect1.collides(rect4)); // true (rect4 touche rect1)
console.log(rect2.collides(rect3)); // false (trop éloignés)
console.log(rect2.collides(rect4)); // true (se chevauchent)

