
SYNTHÈSE DES CLASSES EN JAVASCRIPT

1. Définition et Syntaxe
-------------------------
Une classe est un modèle pour créer des objets avec des propriétés et des méthodes.

Exemple simple de classe :
```js
class Person {
    constructor(name, age) {
        this.name = name;  
        this.age = age;
    }

    sayHello() {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
}

const p1 = new Person("Alice", 25);
p1.sayHello();  // Bonjour, je m'appelle Alice et j'ai 25 ans.
```

2. Propriétés publiques, privées et semi-privées
------------------------------------------------
Propriétés publiques (accessibles partout) :
```js
class Person {
    constructor(name) {
        this.name = name;  // Propriété publique
    }
}

const p = new Person("Alice");
console.log(p.name); // Alice (accessible partout)
p.name = "Bob";      // Modifiable
```

Propriétés privées (`#variable`) (inaccessibles directement) :
```js
class BankAccount {
    #balance; // Propriété privée

    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {  
        return this.#balance;  // Accès sécurisé via un getter
    }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.#balance);     // Erreur (propriété privée)
```

3. Getters et Setters
----------------------
Ils permettent de contrôler l'accès aux propriétés privées.

```js
class User {
    #password;  // Propriété privée

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    get password() {  // Getter : permet de lire la valeur
        return "Mot de passe protégé !";
    }

    set password(newPassword) {  // Setter : permet de modifier avec contrôle
        if (newPassword.length >= 6) {
            this.#password = newPassword;
            console.log("Mot de passe mis à jour !");
        } else {
            console.log("Mot de passe trop court !");
        }
    }
}

const user = new User("Alice", "secret");
console.log(user.password);  // "Mot de passe protégé !"
user.password = "newpass";   // "Mot de passe mis à jour !"
```

4. Héritage (`extends`)
------------------------
Une classe peut hériter d'une autre pour réutiliser ses propriétés et méthodes.

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Bonjour, je suis ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);  // Appelle le constructeur parent
        this.level = level;
    }

    study() {
        console.log(`${this.name} étudie en ${this.level}.`);
    }
}

const student = new Student("Alice", "Master");
student.sayHello();  // Bonjour, je suis Alice.
student.study();     // Alice étudie en Master.
```

5. Exporter et Importer des Classes
------------------------------------
Dans un projet, on organise le code avec des fichiers séparés.

Fichier `Person.js` (exportation) :
```js
export default class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Bonjour, je suis ${this.name}.`);
    }
}
```

Fichier `main.js` (importation) :
```js
import Person from './Person.js';

const p = new Person("Alice");
p.sayHello();  // Bonjour, je suis Alice.
```

Exemple de structure d'utilisation des classes dans un projet JavaScript
----------------------------------------------------------------------

Voici un exemple de structure de projet avec l'utilisation de classes dans différents fichiers :

Projet de gestion d'utilisateurs avec des classes séparées pour chaque modèle, service, et contrôleur.

Structure de dossiers du projet :
```
project/
│
├─ models/        # Contient toutes les classes représentant les modèles
│   ├─ User.js    # Classe pour gérer un utilisateur
│   ├─ Product.js # Classe pour gérer un produit
│   └─ Order.js   # Classe pour gérer une commande
│
├─ services/      # Contient la logique métier et l'interface avec la base de données
│   ├─ userService.js
│   └─ orderService.js
│
├─ controllers/   # Contient les fonctions qui traitent les requêtes utilisateur (ex. API)
│   ├─ userController.js
│   └─ orderController.js
│
└─ main.js        # Point d'entrée du programme, lance l'application
```

### Exemple de classe `User` dans `models/User.js` :
```js
export default class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Bonjour, je m'appelle ${this.name} et mon email est ${this.email}.`);
    }
}
```

### Exemple de service `userService.js` qui gère la logique métier pour les utilisateurs :
```js
import User from '../models/User.js';

export function createUser(id, name, email) {
    const user = new User(id, name, email);
    // Ici on pourrait ajouter une logique pour sauvegarder l'utilisateur dans une base de données
    console.log("Utilisateur créé !");
    user.greet();
    return user;
}

export function getUser(id) {
    // Ici on pourrait récupérer un utilisateur depuis une base de données
    return new User(id, "Alice", "alice@example.com");
}
```

### Exemple de contrôleur `userController.js` pour gérer les requêtes API :
```js
import { createUser, getUser } from '../services/userService.js';

export function handleCreateUser(req, res) {
    const { id, name, email } = req.body;  // Récupération des données de la requête
    const user = createUser(id, name, email);
    res.send(`Utilisateur ${user.name} créé avec succès !`);
}

export function handleGetUser(req, res) {
    const { id } = req.params;
    const user = getUser(id);
    res.send(`Utilisateur récupéré : ${user.name}`);
}
```

### Exemple de fichier principal `main.js` qui fait le lien entre tout :
```js
import { handleCreateUser, handleGetUser } from './controllers/userController.js';

// Simuler une requête API pour créer un utilisateur
const reqCreate = { body: { id: 1, name: "Bob", email: "bob@example.com" } };
const resCreate = { send: (message) => console.log(message) };

handleCreateUser(reqCreate, resCreate);  // Utilisateur Bob créé avec succès !

// Simuler une requête API pour récupérer un utilisateur
const reqGet = { params: { id: 1 } };
const resGet = { send: (message) => console.log(message) };

handleGetUser(reqGet, resGet);  // Utilisateur récupéré : Alice
```

### Explication :
1. **Modèles (`models`)** : Chaque fichier de modèle contient une classe qui représente un élément du projet, par exemple, un utilisateur ou un produit.
2. **Services (`services`)** : Les services contiennent la logique métier de l'application. Ils sont responsables de la gestion des données et de l'interaction avec les modèles.
3. **Contrôleurs (`controllers`)** : Les contrôleurs traitent les requêtes de l'utilisateur et appellent les services appropriés pour gérer les données.
4. **Fichier principal (`main.js`)** : Ce fichier sert de point d'entrée pour l'application et permet de simuler des requêtes ou d'orchestrer l'exécution.

En utilisant cette structure, le projet est bien organisé, ce qui le rend facile à maintenir et à étendre.


Résumé
------
| Concept                | Explication                                  |
|------------------------|----------------------------------------------|
| Classe (`class`)       | Modèle pour créer des objets.               |
| Propriétés (`this.variable`) | Valeurs stockées dans l'objet.            |
| Méthodes (`function()`) | Fonctions à l'intérieur d'une classe.       |
| Public (`this.variable`)  | Accessible partout.                        |
| Privé (`#variable`)    | Accessible uniquement dans la classe.      |
| Getter (`get`)         | Permet de lire une propriété privée.        |
| Setter (`set`)         | Permet de modifier une propriété privée avec validation. |
| Héritage (`extends`)   | Permet de réutiliser le code d'une autre classe. |
| Export/Import          | Facilite la réutilisation dans plusieurs fichiers. |

Les classes permettent d'écrire du code plus clair, structuré et réutilisable.
