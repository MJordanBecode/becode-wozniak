function calcSurface(length, width){
    return length * width;
}
const prompt = require('prompt-sync')();

let length = Number(prompt("chose the Lenght of the rectangle : "));
let width = Number(prompt('Chose the Width of your rectangle : '));

let surface = calcSurface(length, width)
console.log( `Surface of your rectangle = ${surface}` );

