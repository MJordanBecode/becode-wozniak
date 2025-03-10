import Account from "./classAccountCreate.js";

export default class Joueur extends Account {
    constructor(firstName, lastName, Phone, Email, Password, Speudo, Classe, Faction) {
        super(firstName, lastName, Phone, Email, Password); // Appel du constructeur parent
        this.Speudo = Speudo;
        this.Classe = Classe;
        this.Faction = Faction;
    }

    get allInformation() {
        super.allInformation; // Affiche les informations de la classe parent
        console.log(`- Speudo : ${this.Speudo}\n- Classe : ${this.Classe}\n- Faction : ${this.Faction}`);
    }
}

// Création d'un objet Joueur
let newPlayer = new Joueur('Jordan', 'Masy', 2458, 'masyjordan@gmail.com', 'Caca', 'Drasdyuk', 'Mage', 'Horde');
// Appel direct à allInformation pour afficher les informations du joueur
newPlayer.allInformation;
