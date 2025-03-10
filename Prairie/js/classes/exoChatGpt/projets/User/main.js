import CreateUserInJsonDb from "./utils/newUserCreate.js";
import User from "./models/user.js";

// Importation de la bibliothèque prompt-sync avec import
import promptSync from 'prompt-sync';

// Création d'une instance de prompt
const prompt = promptSync();

const ASKQUESTIONNEWUSER = [
    {
        "id": 1,
        "Question": "Qu'elle est votre Nom de Famille ? "
    },
    {
        "id": 2,
        "Question": "Qu'elle est votre prénom ? "
    },
    {
        "id": 3,
        "Question": "Qu'elle est ton âge ? "
    },
    {
        "id": 4,
        "Question": "Qu'elle est votre email ? "
    },
    {
        "id": 5,
        "Question": "Qu'elle est votre mdp ? "
    },
    {
        "id": 6,
        "Question": "Qu'elle est votre profession ? "
    }
]

let userData = {}; //permet de stocker les valeurs du prompt;   
// const createNewUser = prompt('Veuillez ')
for (let i = 0; i < ASKQUESTIONNEWUSER.length; i++) {

    console.log(`${ASKQUESTIONNEWUSER[i].Question} `)
    let answerQuestion = prompt('');

    switch (ASKQUESTIONNEWUSER[i].id) {
        case 1:
            userData.lastName = answerQuestion;
            break;
        case 2:
            userData.firstName = answerQuestion;
            break;
        case 3:  // Cas pour l'age
                userData.Age = parseInt(answerQuestion);  // Ajout de l'âge
                break;
        case 4:
            userData.Email = answerQuestion;
            break;
        case 5:
            userData.Profession = answerQuestion;
            break;
        case 6:
            userData.PassWord = answerQuestion;
            break;
        default:
            break;
    }



}

// Création de l'utilisateur
let Person = new User(
    userData.firstName,
    userData.lastName,
    userData.Age,
    userData.Email,
    userData.PassWord,
    userData.Profession
);

// Enregistrement dans la DB
CreateUserInJsonDb(
    Person.firstName,
    Person.lastName,
    Person.Age,
    Person.Email,
    Person.PassWord,
    Person.Profession
);

console.log(Person.informationUser);