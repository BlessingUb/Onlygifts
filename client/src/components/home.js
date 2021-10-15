import React, { Component } from 'react';
import "../App.css"
import Particles from 'react-particles-js';

export default class Home extends Component {
  render() {
    return (
	
      <div className="homeparticle">
		  <span className="home"> WELCOME TO ONLYGIFTS </span>
          <Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
      color: {
        value: "#9370DB"
      },
      line_linked: {
        color: {
          value: "#800080"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>
      </div>
    );
  }
}
