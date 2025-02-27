const prompt = require('prompt-sync')();


let AskNumber = Number(prompt('Chose a number : '));

if(!isNaN(AskNumber)){
   let i = 0; let sum = 0;

   while (i <= AskNumber) {
        sum = sum + i;
        console.log(i)
        i++

   }
   console.log(sum)
}