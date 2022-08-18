import logo from './logo.svg';
import './App.css';
import Hangman from './Components/Hangman';
import Buttons from './Components/Buttons';
import Userinputs from './Components/Userinputs';

function App() {
  return (
    <div className="App">
      <Hangman/>
      <Buttons/>
      <Userinputs/>
    </div>
  );
}

export default App;
