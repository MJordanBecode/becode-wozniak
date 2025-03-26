let today = new Date();

console.log('Bruxelles : '+ today.toLocaleString("fr-BE", { timeZone : "Europe/Brussels"})+"\n");
console.log('Anchorage : '+ today.toLocaleString("en-US", { timeZone : "America/Anchorage"})+"\n");
console.log('Reykjavik : '+ today.toLocaleString("is-IS", { timeZone : "Atlantic/Reykjavik"})+"\n");
console.log('Moscou : '+ today.toLocaleString("ru-RU", { timeZone : "Europe/Moscow"})+"\n");


function calculateDaysSince(dateString) {
    let today = new Date();
    let pastDate = new Date(dateString);

    // Calculer la différence en millisecondes
    let differenceInTime = today - pastDate;

    // Convertir la différence en jours
    return Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
}


let birthDate = '2000-12-17'; 
let daysSinceBirth = calculateDaysSince(birthDate);

console.log("Nombre de jours depuis ma naissance : " + daysSinceBirth);


function calculateTimeSince(dateString) {
    let now = new Date();
    let pastDate = new Date(dateString);

    // Calculer la différence en millisecondes
    let differenceInTime = now - pastDate;

    // Convertir la différence en jours, heures, minutes et secondes
    let days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}


// Exemple d'utilisation
let birthDate2 = '2000-12-17';
let timeSinceBirth = calculateTimeSince(birthDate2);

console.log(`Depuis ma naissance : ${timeSinceBirth.days} jours, ${timeSinceBirth.hours} heures, ${timeSinceBirth.minutes} minutes et ${timeSinceBirth.seconds} secondes.`);


function getCurrentDateTime() {
    let now = new Date();

    let dayName = now.toLocaleDateString("fr-FR", { weekday: 'long' }); // Jour de la semaine
    let dayNumber = now.getDate(); // Numéro du jour
    let month = now.toLocaleDateString("fr-FR", { month: 'long' }); // Mois
    let hours = now.getHours(); // Heures
    let minutes = now.getMinutes(); // Minutes
    let seconds = now.getSeconds(); // Secondes
    let year = now.getFullYear(); // Année

    return { dayName, dayNumber, month, hours, minutes, seconds, year };
}

const SELECT_DAY = document.querySelector('.day');
console.log(SELECT_DAY);
const SELECT_MONTH = document.querySelector('.Month');
console.log(SELECT_MONTH);
const SELECT_YEAR = document.querySelector('.Year');
console.log(SELECT_YEAR);

// const SELECT_HOUR = document.querySelector('.hour');
// const SELECT_MINUTE = document.querySelector('.minute');
// const SELECT_SECOND = document.querySelector('.second');

let currentDateTime = getCurrentDateTime();
console.log(`Aujourd'hui, nous sommes ${currentDateTime.dayName} ${currentDateTime.dayNumber} ${currentDateTime.month}, il est ${currentDateTime.hours}h${currentDateTime.minutes}m${currentDateTime.seconds}s. ${currentDateTime.year}.`);
SELECT_DAY.innerHTML = currentDateTime.dayName;
SELECT_YEAR.innerHTML = currentDateTime.year;
SELECT_MONTH.innerHTML = currentDateTime.month.slice(0, 3).toUpperCase();
console.log(SELECT_DAY);
function getFutureDate(daysToAdd) {
    let now = new Date();

    // Ajouter le nombre de jours spécifié
    now.setDate(now.getDate() + daysToAdd);

    // Récupérer les informations de la nouvelle date
    let dayName = now.toLocaleDateString("fr-FR", { weekday: 'long' }); // Jour de la semaine
    let dayNumber = now.getDate(); // Numéro du jour
    let month = now.toLocaleDateString("fr-FR", { month: 'long' }); // Mois
    let year = now.getFullYear(); // Année

    return { dayName, dayNumber, month, year };
}

// Exemple d'utilisation
let futureDate = getFutureDate(10); // Ajouter 10 jours à la date actuelle
console.log(`Dans 10 jours, nous serons ${futureDate.dayName} ${futureDate.dayNumber} ${futureDate.month} ${futureDate.year}.`);