import './App.css';
import Nav from './Nav';
import Game from './Game';
import Char from './Char';


function App() {
  return (
    <div className="App">
      <Nav />
            <h1>Little Leaders V2</h1>
      <p>Hannah Joynson & Richard Larson</p>

      <Char />
      <Game />
      
    </div>
  );
}

export default App;
