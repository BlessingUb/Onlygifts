import React, { Component } from 'react';
import avatar from '../images/lonely-boy.gif';

export default class Home extends Component {
  render() {
    return (
      <div id='home-box'>
        <div class='header-title'>
          <h1 id='center'>Welcome to Only Gifts</h1>
        </div>
        <img id='avatar' src={avatar} />
      </div>
    );
  }
}