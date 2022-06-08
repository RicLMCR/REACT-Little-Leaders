import Char from './Char.js';
import ButtonNarc from './ButtonNarc';
import { useEffect, useState } from 'react';
import ButtonInsec from './ButtonInsec.js';

const Game = () => {

    // CHARACTER GENERATION: Character properties hook. Could introduce array to include different characters
    // TEST: Display object properties and subject to increase/decreases in scores
   const [character, setCharacter] = useState (
       {title:"The Donald", narc:15, insec:15, controv:0, id:1}
   );

    // STATS NARC: Social media/narcissm function. Narc should not exceed 30 or be below 0
    // TEST: Button press leads to random increase in narc score
    const tweet = (randNum)=>{
        try {
            let newObj = {title:character.title, narc:character.narc, insec:character.insec, controv:character.controv, id:character.id};
            let narcVal = newObj.narc + randNum;
            newObj.narc = narcVal;
            // if score is higher than 30 then score is 30. If score is lower than 0 then score is 0. Otherwise score remains the same (do nothing)
            (newObj.narc > 30)? newObj.narc = 30 : (newObj.narc < 0)? newObj.narc = 0: (newObj.narc = newObj.narc);
            setCharacter (newObj);
            console.log(character);
        } catch (error){
            console.log(error);
        }
    };

    // STATS INSEC: Insecurity function. Insec should not exceed 30 or be below 0
    // TEST: Button press leads to random decrease in insec score
    const press = (randNum)=>{
        try {
            let newObj = {title:character.title, narc:character.narc, insec:character.insec, controv:character.controv, id:character.id};
            let insecVal = newObj.insec - randNum;
            newObj.insec = insecVal;
            (newObj.insec > 30)? newObj.insec = 30 : (newObj.insec < 0)? newObj.insec = 0 : (newObj.insec = newObj.insec);
            setCharacter (newObj);
            console.log(character);
        } catch (error){
            console.log(error);
        }
    };

    // STATS CONTROV: Controversy function
    // Controv score increases by random amount each time it's selected
    // trigger 'controversy' animation
    // Controv has random effect on all other stats
    // If controv score reaches max (30) then game is lost
    // TEST: Controv increase (leads to win/lose ocndition) AND random impact on other stats


    // TIMER: 5 min countdown
    // if no button presses within a period of time (e.g 1min) then player stats deteriate
    // As player stats deteriate, trigger 'bored character' animation
    // TEST: Narc score should decrease every 2 seconds || Insec score should increase every 2 seconds

    // WIN/LOSS - useEffect to assess current stat scores and determine if win/lose conditions are met
    // trigger wion/lose animation
    // TEST: win/lose animations should trigger if narc => 10 || < 0 OR same reverse for insec
    useEffect (()=>{
        console.log("useffect update");
        if (character.narc === 30 || character.insec === 0 ){
            console.log("You win!");
            return;
        } else if (character.narc === 0 || character.insec === 30){
            console.log("You lose");
        } 
        // On win/lose trigger animation and 'start again' option
    });


    return ( 
        <div>
            <h1>Game Engine Here</h1>
            <Char title={character.title} narc={character.narc} insec={character.insec} controv={character.controv}/>
            <ButtonNarc tweet={tweet}/>
            <ButtonInsec press={press}/>
        </div>
    );

}
 
export default Game;