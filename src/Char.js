const Char = ({title,narc,insec}) => {

    return ( 
        <div className="charStats" >
             <p>Name: {title}</p>
             <p>Narcissm: {narc}</p>
             <p>Insecurity: {insec}</p>
        </div>
     );
}
 
export default Char;