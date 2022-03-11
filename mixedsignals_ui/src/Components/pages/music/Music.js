import React from 'react';

export class Music extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="music-container">
        <h3>Check out our most popular releases</h3>
        <iframe src="https://open.spotify.com/embed/artist/64GCgEFsS6P3RhozWis1IN?utm_source=generator"
        width="100%" 
        height="380" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; \
        clipboard-write; \
        encrypted-media; \
        fullscreen; \
        picture-in-picture"
        ></iframe>
      </div>
    );
  }
}

export default Music;
