const ButtonNarc = ({tweet}) => {

    let randNum = Math.floor(Math.random()*10);

    return ( 
        <div>
            <button  onClick={()=> tweet(randNum)}>Tweet</button>
        </div>
     );
}
 
export default ButtonNarc;