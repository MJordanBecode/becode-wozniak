export default function UserAge(AGE){

    

    if(AGE >= 18){
        console.log('You are an Adult');
    }else{
        console.log('You aren\'t an Adult')
    }
}

let answer = prompt("What is your age?");
let age = Number(answer);

if (!isNaN(age)) {
    UserAge(age);
} else {
    console.log("Please enter a valid number.");
}