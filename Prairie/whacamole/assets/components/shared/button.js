import createDomElement from "../../utils/functions/createElement.js";

export default function containerOptionStartStopResetButton(){
    const SELECT_CONTAINER_ALL_GAME = document.querySelector('.leaderBoard');
    //creation of the Div 
    const CREATE_DIV = createDomElement('div');
    CREATE_DIV.classList.add('container_button_game');
    SELECT_CONTAINER_ALL_GAME.appendChild(CREATE_DIV);
    // Creation of the button 
    const CREATE_BUTTON_START = createDomElement('button');
    CREATE_BUTTON_START.classList.add('button-start');
    CREATE_BUTTON_START.innerHTML = 'start'

    const CREATE_BUTTON_STOP = createDomElement('button');
    CREATE_BUTTON_STOP.classList.add('button-stop');
    CREATE_BUTTON_STOP.innerHTML = 'stop'

    const CREATE_BUTTON_RESET = createDomElement('button');
    CREATE_BUTTON_RESET.classList.add('button-reset');
    CREATE_BUTTON_RESET.innerHTML = 'reset'


    SELECT_CONTAINER_ALL_GAME.appendChild(CREATE_DIV);
    CREATE_DIV.appendChild(CREATE_BUTTON_START);
    CREATE_DIV.appendChild(CREATE_BUTTON_STOP);
    CREATE_DIV.appendChild(CREATE_BUTTON_RESET);
    
}