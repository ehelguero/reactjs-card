import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Card from './Card';
import InputEvents from './InputEvents';
import MovementEvents from  './MovementEvents';
import FormValidation from "./FormValidation";
import ShoppingList from "./shoppingList/ShoppingList";
import AddressBook from "./addressBook/AddressBook";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import About from "./pages/About";
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
          <li><Link to="/contact/you">Contact you</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact/:userId" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
