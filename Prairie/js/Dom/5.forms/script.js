// Fonction pour récupérer les valeurs des inputs
async function SelectInputAll() {
    try {
        const SELECTALLINPUT = [...document.querySelectorAll('input')]; // Convertir en tableau
        let safeValueInput = [];

        for (const input of SELECTALLINPUT) {
            safeValueInput.push({ [input.name]: input.value });
        }

        return safeValueInput; // Retourner le tableau des données
    } catch (error) {
        console.log(error);
        return []; // Retourner un tableau vide en cas d'erreur
    }
}

// Fonction qui met à jour le span avec la valeur du prénom
async function displayName() {
    try {
        const SELECTSPANDISPLANAME = document.querySelector('#display-firstname'); // Sélectionner le span
        let data = await SelectInputAll();  // Récupérer les données des inputs
        console.log(data); // Vérifier les données

        // Trouver l'input avec name="firstname"
        let selectFirstDataName = data.find(item => item["firstname"]);
        // Création du <p> pour l'affichage
        let createP = document.createElement('p');

        if (selectFirstDataName && selectFirstDataName["firstname"]) {
            // Si on trouve le prénom, on l'affiche dans le <p> à l'intérieur du span
            createP.innerHTML = 'Bienvenue Seigneur ' + selectFirstDataName["firstname"] + ' ! Nous attendions votre arrivée avec impatience! ';
            SELECTSPANDISPLANAME.innerHTML = ''; // On vide le span avant d'ajouter le <p>
            SELECTSPANDISPLANAME.appendChild(createP); // Ajouter le <p> au span
        } else {
            // Si le prénom n'est pas trouvé, afficher "Nom introuvable"
            SELECTSPANDISPLANAME.innerHTML = "Nom introuvable. Veuillez remplir ce champ.";
        }
    } catch (error) {
        console.log(error);
        // Gérer l'erreur, par exemple afficher un message générique
        document.querySelector('#display-firstname').innerHTML = "Une erreur s'est produite, veuillez réessayer.";
    }
}

// Fonction de gestion des erreurs pour vérifier si le prénom est vide
async function setError() {
    let data = await SelectInputAll(); // Récupérer les valeurs des inputs
    let selectFirstDataName = data.find(item => item["firstname"]); // Trouver l'objet avec la clé "firstname"
    let selectage = data.find(item => item["age"]); // Trouver l'objet avec la clé "age"
    let selectpwd = data.find(item => item["pwd"]); // Trouver l'objet avec la clé "pwd"
    let selectPwdConfirm= data.find(item => item["pwd-confirm"]); // Trouver l'objet avec la clé "pwd-confirm"
    // Vérifier si le prénom est vide
    if (!selectFirstDataName || !selectFirstDataName["firstname"]) {
        alert('Le nom ne peut pas être vide');
        return false;  // Retourne false si une erreur est trouvée
    }
    if (selectage && selectage["age"]) {
        let age = Number(selectage["age"]);  // Convertir la valeur de "age" en nombre
        console.log(age);  // Afficher la valeur de l'âge convertie en nombre
    } else {
        alert("L'âge n'est pas renseigné ou est vide.");
    }
    let pwdLength = selectpwd["pwd"].length;  // Longueur de la valeur associée à "pwd"
    console.log('test : '+pwdLength)
    if (pwdLength < 6) {
        alert("Longueur du mot de passe doit être supérieur à 6 caractères :", pwdLength);  // Afficher la longueur
    } else {
        console.log("Mot de passe non trouvé ou vide");
    }
    return true;  // Retourne true si tout est valide
}

// Fonction qui est appelée lors du clic sur le bouton de soumission
document.querySelector('#submit-button').addEventListener('click', async function (event) {
    event.preventDefault();  // Empêche la soumission du formulaire si des erreurs sont présentes

    // Appeler la fonction de vérification des erreurs
    let isValid = await setError();

    if (isValid) {
        // Si tout est valide, on peut appeler displayName ou soumettre le formulaire
        displayName();
        // Tu peux aussi soumettre le formulaire ou effectuer d'autres actions ici
        console.log("Le formulaire est valide et prêt à être soumis.");
    } else {
        console.log("Le formulaire contient des erreurs. Impossible de soumettre.");
    }
});
