function Random(min, max){
    return Math.floor(Math.random()*(max- min + 1)+min)
}
let array = []; 

console.log(Random(1,10));