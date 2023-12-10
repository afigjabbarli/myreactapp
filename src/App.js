
import './App.css';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  let name = "Jabbarli Afig"
  return (
    <div className="App">
         <WelcomeMessage name={name}/>
    </div>
  );
}


export default App;

