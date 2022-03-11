import React from 'react';
import MixedSignalsBackground from './mixed_signals.png';
import './Home.css';

export class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="Home-container" style={{background: `url(${MixedSignalsBackground})`}}>
        <h1>Booking</h1>
        For show bookings, please contact <b>zrmmaster92@gmail.com</b>
      </div>
    );
  }
}

export default Home;
