import React from 'react';
import Moraga from './moraga-hills.png';
import './About.css';

export class About extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="About-container" style={{background: `url(${Moraga})`}}>
        <h1>Where we started</h1>
        <br />
        <br />
        <div id="about-blurb">
          About the band
        </div>
      </div>
    );
  }
}

export default About;