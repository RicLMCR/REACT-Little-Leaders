const Char = ({title,narc,insec}) => {

    return ( 
        <div className="charStats" >
            <h1>Character Stats Here</h1>
             <p>Name:{title}</p>
             <p>Narcissm:{narc}</p>
             <p>Insecurity:{insec}</p>
        </div>
     );
}
 
export default Char;