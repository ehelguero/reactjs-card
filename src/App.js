import './App.css';
import Card from './Card';
import InputEvents from './InputEvents';
import MovementEvents from  './MovementEvents';
import FormValidation from "./FormValidation";
import ShoppingList from "./shoppingList/ShoppingList";
import AddressBook from "./addressBook/AddressBook";
import './Card.css';
import './Events.css';

function App() {
  return (
    <div className="App">
      <AddressBook />
      <ShoppingList />
      <FormValidation />
      <Card />
      <InputEvents />
      <MovementEvents />
    </div>
  );
}

export default App;
