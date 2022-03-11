import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Nav.css';
import siteLogo from '../../assets/mixedsignalslogo.png'

export class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="nav-container">
        <ul className="nav-list" id="nav">
          <li id="nav-logo">
            <Link to="/home">
              <div id="logo-nav">
                <img src={siteLogo} alt="Logo" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div class="nav-text">
                | About |
              </div>
            </Link>
          </li>
           <li>
            <Link to="/shows">
              <div class="nav-text">
               | Shows |
              </div>
            </Link>
          </li>
          <li>
            <Link to="/music">
              <div class="nav-text">
                | Music |
              </div>
            </Link>
          </li>
          <li id="nav-hamburger">
            <Link to="/mobileNav" className="hamburger-link">
            <div className="hamburger-text">
              ☰
            </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;