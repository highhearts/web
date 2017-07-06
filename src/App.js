import React, { Component } from 'react';
import bg from './bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
            <div className="masthead">
              <div className="container">
                <h3 className="masthead-title">
                  <a href="/" title="Home">High Hearts</a>
                  <br/><small>Music | Band | Shows | Contact</small>
                </h3>
              </div>
            </div>
            <div className="container content" id="main">
              <div className="introduction">
              <h1>Hi.</h1>

              <p>High Hearts are a musical salve to ease the burn of modern life.
              High Hearts make
              music with old instruments. Theirs is a message of togetherness,
              often sung, appropriately, in harmony. We are truly all
              in this together.</p>
              </div>

              <hr/>
            </div>
      </div>
    );
  }
}

export default App;
