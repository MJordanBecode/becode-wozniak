Niveau Débutant 🟢
1. Création d'une classe simple
Crée une classe Person avec les propriétés nom et âge. Ajoute un constructeur et une méthode sePresenter() qui affiche une phrase comme :
➡️ "Bonjour, je m'appelle Jean et j'ai 25 ans."

Exemple attendu :

js
Copier
Modifier
const p1 = new Person("Alice", 30);
p1.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 30 ans.


2. Classe avec getters et setters
Ajoute des getters et setters pour la propriété âge, qui vérifie que l'âge est bien un nombre positif.

js
Copier
Modifier
const p2 = new Person("Bob", -5); // Doit empêcher la valeur négative


3. Héritage basique
Crée une classe Etudiant qui hérite de Person et ajoute une propriété matière. Modifie sePresenter() pour inclure cette information.

Exemple attendu :

js
Copier
Modifier
const etudiant = new Etudiant("Marie", 22, "Maths");
etudiant.sePresenter(); // Bonjour, je m'appelle Marie, j'ai 22 ans et j'étudie Maths.


Niveau Intermédiaire 🟡

4. Méthodes statiques
Ajoute une méthode statique compareAge(person1, person2) qui compare l'âge de deux instances et affiche qui est plus âgé.

Exemple attendu :

js
Copier
Modifier
Person.compareAge(p1, p2); // Alice est plus âgée que Bob.

5. Propriétés et méthodes privées
Modifie Person pour que nom soit une propriété privée, et ajoute une méthode getNom() pour l'afficher.


6. Singleton en classe
Crée une classe Database qui empêche plusieurs instances d’être créées (singleton pattern).

js
Copier
Modifier
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true

Niveau Expert 🔴
7. Gestion des erreurs avec try/catch
Ajoute des exceptions si l'on tente de donner un âge non valide.

8. Factory avec classes
Crée une Factory qui génère des objets Person ou Etudiant selon un type passé en paramètre.

9. Système de gestion d'utilisateurs
Crée une classe Utilisateur avec des sous-classes Admin et Membre, où Admin peut gérer la liste des membres.

js
Copier
Modifier
const admin = new Admin("SuperAdmin");
admin.ajouterMembre(new Membre("John"));
admin.listerMembres();