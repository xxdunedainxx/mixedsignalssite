import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class MobileNav extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <ul id="mobile-nav-list">
        <li>
            <Link to="/home">
              <div className="mobile-item-text">
                Home
              </div>
            </Link>
          </li>
          <li>
              <Link to="/about">
                <div className="mobile-item-text">
                  About
                </div>
              </Link>
          </li>
          <li>
            <Link to="/shows">
              <div className="mobile-item-text">
                Shows
              </div>
            </Link>
          </li>
          <li>
            <Link to="/music">
              <div className="mobile-item-text">
                Music
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileNav;