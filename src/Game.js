import ButtonNarc from './ButtonNarc';
import ButtonInsec from './ButtonInsec';
import ButtonControv from './ButtonControv';

const Game = () => {

    // Narc, Insec, Controv functions Headers. Link to button components via props
    return ( 
        <div>
            <h1>Game Engine Here</h1>
            <ButtonNarc />
            <ButtonInsec />
            <ButtonControv />
        </div>
     );
}
 
export default Game;