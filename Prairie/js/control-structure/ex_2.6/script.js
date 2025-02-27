const prompt = require('prompt-sync')();

let ChoseNumberBetweenOneAndSeven = Number(prompt('Chose a number bewteen 1 and 7 : '));

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

switch (ChoseNumberBetweenOneAndSeven) {
    case 1:
        console.log(daysOfWeek[0])
        break;
    case 2:
        console.log(daysOfWeek[1])
        break
    case 3:
        console.log(daysOfWeek[2])
        break
    case 4:
        console.log(daysOfWeek[3])
        break
    case 5: 
    console.log(daysOfWeek[4])
        break
    case 6: 
    console.log(daysOfWeek[5])
        break
    case 7:
        console.log(daysOfWeek[6])
        break
    default:
        break;
}
