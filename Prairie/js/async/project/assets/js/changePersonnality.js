import displayData from "./displayData.js";
export default function changePersonnality() {
const SELECT_BUTTON = document.querySelector('#changePersonnality');

SELECT_BUTTON.addEventListener('click', () => {
    console.log(SELECT_BUTTON) // debug
    displayData();
})
}