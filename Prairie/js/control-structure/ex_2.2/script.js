export default function VerifyCurrentBetweenMinAndMax(min, max, current){
    if((min > current)&&(max>current)){
        console.log("The current number is between Min and Max")
    }else{
        console.log("current isn't between min and max")
    }

    if(min < max){
        console.log("Max is greater than min")
    }else{
        console.log("Min is greater than max")
    }
}

let min; let max; let current; 

min = prompt("Select the Min Number");
max = prompt("Select the max Number");

current = prompt("Select a number");

min = Number(min); max = Number(max); current = Number(current)

if (!isNaN(min) && !isNaN(max) && !isNaN(current)) {
    VerifyCurrentBetweenMinAndMax(min, max, current);
} else {
    console.log("Please enter valid numbers.");
}