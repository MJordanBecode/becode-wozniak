const ARRAY = ['2','3','7','25'];
let sum = 0;
for(let i = 0;i<ARRAY.length;i++){
    console.log(ARRAY[i]);

    sum = (sum + Number(ARRAY[i]))/ARRAY.length;

}
console.log(parseInt(sum))
