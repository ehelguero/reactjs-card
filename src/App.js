import './App.css';
import Card from './Card';
import InputEvents from './InputEvents';
import MovementEvents from  './MovementEvents';
import FormValidation from "./FormValidation";
import './Card.css';
import './Events.css';

function App() {
  return (
    <div className="App">
      <FormValidation />
      <Card />
      <InputEvents />
      <MovementEvents />
    </div>
  );
}

export default App;
