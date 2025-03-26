let mainElement = document.querySelector('main');
let buttonElement = document.querySelector("button");
console.log(buttonElement);

function printJsonFile() {
    buttonElement.addEventListener('click', event => {
        // console.log('test zebi');
 
        fetch('users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                console.log("JSON content:", json);

                const selecUl = document.querySelector('ul');
                
                // Effacer le contenu précédent de la liste avant d'ajouter de nouveaux éléments
                selecUl.innerHTML = '';

                // Créer un nouvel élément li pour chaque élément du tableau JSON
                json.forEach(element => {
                    const li = document.createElement('li');
                    li.textContent = ""+ element.nom + " "+element.age;
                    selecUl.appendChild(li);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
}


printJsonFile();


async function fetchDataAgify(name) {
    try {
        const response = await fetch(`https://api.agify.io?name=${name}`);

        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`);
        }

        const data = await response.json();
        console.log(data)

        console.log('nom : ' + data.name + ' age : ' + data.age);
        return data;
    } catch (error) {
        console.error(`Could not get products : ${error}`);	
    }
}


// Sélecteurs     
const SELECT_SUBMIT = document.querySelector('#submit');
const SELECT_INPUT = document.querySelector('#text');
const SELECT_NAME = document.querySelector('#name');
const SELECT_AGE = document.querySelector('#age');

// Empêcher le rechargement de la page
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// Écouteur d'événement sur le bouton
SELECT_SUBMIT.addEventListener('click', async () => {
    console.log('tu as cliqué sur moi');
    console.log('le nom est : ' + SELECT_INPUT.value);

    // Récupérer les données et mettre à jour le HTML
    const data = await fetchDataAgify(SELECT_INPUT.value);
    if (data) {
        SELECT_NAME.innerHTML = 'Nom : ' + data.name;
        SELECT_AGE.innerHTML = 'Âge estimé : ' + data.age;
    }
});