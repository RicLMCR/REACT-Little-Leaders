import Char from './Char.js';
import ButtonNarc from './ButtonNarc';
import { useState } from 'react';
import ButtonInsec from './ButtonInsec.js';

const Game = () => {

   // CHARACTER GENERATION: Properties hook
   const [character, setCharacter] = useState (
       {title:"The Donald", narc:15, insec:15, controv:0, id:1}
   );

// STATS NARC: Social media/narcissm function
    const tweet = (randNum)=>{
        try {
            let newObj = {title:character.title, narc:character.narc, insec:character.insec, controv:character.controv, id:character.id};
            let narcVal = newObj.narc + randNum;
            newObj.narc = narcVal;
            setCharacter (newObj);
            console.log(character);
        } catch (error){
            console.log(error);
        }
    };

// STATS INSEC: Insecurity function
const press = (randNum)=>{
    try {
        let newObj = {title:character.title, narc:character.narc, insec:character.insec, controv:character.controv, id:character.id};
        let insecVal = newObj.insec + randNum;
        newObj.insec = insecVal;
        setCharacter (newObj);
        console.log(character);
    } catch (error){
        console.log(error);
    }
};

// STATS CONTROV: Controversy function

// TIMER

// WIN/LOSS - useEffect needs to go here to assess current stats scores and determine if win/lose conditions are nmet

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