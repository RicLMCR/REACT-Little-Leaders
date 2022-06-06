const ButtonInsec = ({press}) => {
    
    let randNum = Math.floor(Math.random()*10);

    return ( 
        <div>
            <button  onClick={()=> press(randNum)}>Press Release</button>
        </div>
     );
}
 
export default ButtonInsec;