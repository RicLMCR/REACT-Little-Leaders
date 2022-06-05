import {useState } from "react";

const Char = () => {
    // Character class object and sub-class here
const [character, setCharacter] = useState ([]);

// Function to return character object/class
const generateChar = (name, narc, insec, controv)=>{
    let charClass = [name, narc, insec, controv];
    setCharacter(charClass);
    return (
        console.log(charClass)
    )
};

    return ( 
        <div>
            <h1>Character Here</h1>
            <button onClick={()=>{generateChar("The Donald", 10, 0, 0)}}>Generate Character</button>
            <p>{character}</p>
        </div>
     );
}
 
export default Char;