import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import {UserContext} from './UserContext'
function App() {
  const [value, setValue] = useState('chand')
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <UserContext.Provider value={{value, setValue}}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
