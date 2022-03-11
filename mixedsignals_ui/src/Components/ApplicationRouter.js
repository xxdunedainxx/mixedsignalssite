
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import {Music} from './pages/music/Music';
import {Home} from './pages/home/Home';
import {Shows} from './pages/shows/Shows';
import {About} from './pages/about/About';
import {MobileNav} from './Nav/MobileNav';

export class ApplicationRouter extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="appRouter">
        <Routes>
          <Route path='/music' element={<Music />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/mobileNav' element={<MobileNav />} />
        </Routes>
      </div>
    );
  }
}

export default ApplicationRouter;