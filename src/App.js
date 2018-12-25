import React, { Component } from 'react';
import './App.css';

import './styles.scss';
import Sidebar from './components/sidebar';
import ColorScheme from './components/color-scheme';
import Typography from './components/typography';
import Buttons from './components/buttons';
import Forms from './components/forms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        <div id="page-wrap">
          <h1 className="text-primary">IG style guide</h1>
          <p>Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. I don't 'need' to drink. 
          I can quit anytime I want! I saw you with those two "ladies of the evening" at Elzars. Explain that.

          We don't have a brig. No, she'll probably make me do it. The alien mothership is in orbit here. If we can hit that bullseye, 
          the rest of the dominoes will fall like a house of cards. Checkmate. The key to victory is discipline, and that means a well
          made bed. You will practice until you can make your bed in your sleep.
          
          Uh, is the puppy mechanical in any way? Yes, except the Dave Matthews Band doesn't rock. Perhaps, but perhaps your civilization
          is merely the sewer of an even greater society above you! Stop! Don't shoot fire stick in space canoe! Cause explosive decompression!
          </p>
          <ColorScheme  />
          <Typography />
          <Buttons />
          <Forms />
        </div>
      </div>
    );
  }
}

export default App;
