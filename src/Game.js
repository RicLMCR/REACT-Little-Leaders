import Char from './Char.js';
import ButtonNarc from './ButtonNarc';
import { useState } from 'react';

const Game = () => {

   // CHARACTER GENERATION: Properties hook
   const [character, setCharacter] = useState (
       {title:"The Donald", narc:10, insec:0, controv:0, id:1}
   );

// STATS ADJ: Social media/narcissm function
    const tweet = (randNum)=>{
        let narcVal = character.narc + randNum;
        character.narc = narcVal;
        console.log (`narcVal is: ${narcVal}`);
        console.log(character);
        // setCharacter (narcVal); // This needs to target the narc value specifically
    };

// WIN/LOSS - useEffect needs to go here to assess current stats scores and determine if win/lose conditions are nmet


    return ( 
        <div>
            <h1>Game Engine Here</h1>
            <Char title={character.title} narc={character.narc} insec={character.insec}/>
            <ButtonNarc tweet={tweet}/>
        </div>
    );

}
 
export default Game;