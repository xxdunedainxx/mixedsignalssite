import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {ApplicationRouter} from './Components/ApplicationRouter';
import {Nav} from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <ApplicationRouter />
      </Router>
    </div>
  );
}

export default App;
