
export default function randomElment(min, max){
    const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInRange;
}