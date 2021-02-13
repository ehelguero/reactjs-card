import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Route exact path="/" render={() => {
          return <h2>Home Page</h2>
        }} />
        <Route path="/about" render={() => {
          return <h2>About</h2>
        }} />
        <Route path="/contact" render={() => {
          return <h2>Contact</h2>
        }} />

      </Router>
    </div>
  );
}

export default App;
