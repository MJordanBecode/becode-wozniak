import createBackGroundGame from "../components/createCard.js";
import loseHeartByDamages from "../utils/functions/loseHeart.js";
import timerGame from "../utils/functions/timerGame.js";
import containerOptionStartStopResetButton from "../components/shared/button.js";
createBackGroundGame();
loseHeartByDamages();
timerGame();
containerOptionStartStopResetButton();
