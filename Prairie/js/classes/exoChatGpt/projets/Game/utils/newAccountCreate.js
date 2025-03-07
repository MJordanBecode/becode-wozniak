import Datastore from 'nedb';

export default function CreateUserInJsonDb(firstName, lastName, Phone ,Email, Password) {
    // Crée une nouvelle instance de la base de données, avec un fichier spécifique
    const db = new Datastore({ filename: 'db/user.json', autoload: true });

    // Insérer un nouvel utilisateur
    const newUser = { "firstName": firstName, "lastName": lastName, "Phone":Phone ,"email": Email, "password": Password};

    db.insert(newUser, function (err, newDoc) {
        if (err) {
            console.log('Erreur lors de l\'insertion de l\'utilisateur:', err);
        } else {
            console.log('Utilisateur ajouté:', newDoc);
        }
    });

}
