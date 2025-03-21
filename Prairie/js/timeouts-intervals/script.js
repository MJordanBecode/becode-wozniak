// const ARRWOZNIAK = ['W', 'O', 'Z', 'N', 'I', 'A', 'K'];
// let i = 0;

// function printArrWozniakLetterByLetter() {
//     if (i < ARRWOZNIAK.length) {
//         console.log(ARRWOZNIAK[i]);
//         i++; 
//     } else {
//         clearInterval(interval); 
//     }
// }


// // Déclenche l'affichage lettre par lettre toutes les 1000 ms (1 seconde)
// const interval = setInterval(printArrWozniakLetterByLetter, 3000);


let i = 0;
function secondPassedOnPage(){
    if(i <= 0){
        console.log('Bienvenue sur mon site ! ')
    }

    if(i == 60){
        console.log(`Vous avez passé une minute sur notre site ! `);
    }else if(i == 120){
        console.log(`Vous avez passé deux minute sur notre site ! `);
    }
    i++
}

setInterval(secondPassedOnPage, 1000);