import React from 'react';

export class Shows extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div id="music-container">
      <h3>Check out our recent anouncements and shows!</h3>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmixedsignals1%2Fevents&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340" 
        height="500" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
      </div>
    );
  }
}

export default Shows;


