class Person {
    constructor(Nom, Age) {
        this.Nom = Nom;
        this._age = Age; // Utilisation d'un attribut privé avec un underscore
    }

    // Getter pour accéder à l'âge
    get age() {
        return this._age;
    }

    // Setter pour définir l'âge en vérifiant qu'il est positif
    set age(val) {
        if (val > 0) {
            this._age = val;
        } else {
            console.log("L'âge doit être un nombre positif.");
        }
    }

    // Méthode pour se présenter
    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.Nom} et j'ai ${this.age} ans.`);
    }
}

// Instantiation de l'objet
let p1 = new Person("Jordan", 24);
p1.sePresenter(); // Bonjour, je m'appelle Jordan et j'ai 24 ans.

// Modification de l'âge via le setter
p1.age = 30; // L'âge devient 30
p1.sePresenter(); // Bonjour, je m'appelle Jordan et j'ai 30 ans.

// Tentative de mettre un âge invalide
p1.age = -5; // L'âge doit être un nombre positif.
p1.sePresenter(); // Bonjour, je m'appelle Jordan et j'ai 30 ans.
