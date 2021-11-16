import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gift from '../images/gift1.gif';
import GiftBox from '../images/gift3.gif';
import Container from './Form/Container';
import MsgContainer from './Form/MessageContainer';

const userSessionExists = document.cookie.length > 0;
const noSession = document.cookie.length === 0;

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class='bar-box'>
          <li class='logo-li'>
            <div href='#'>
              <img src={Gift} alt='' class='logo-li' />
            </div>
          </li>
          <li class='li-box'>
            <Link class='' to='/hello' class='li-box'>
              ONLY GIFTS
            </Link>
          </li>
          {noSession && (
            <div className='collpase navbar-collapse'>
              <li class='li-box'>
                <Link to='/register' class='li-box'>
                  Register
                </Link>
              </li>
              <li class='li-box'>
                <Link to='/login' class='li-box'>
                  Log In
                </Link>
              </li>
            </div>
          )}
          {userSessionExists && (
            <div className='collpase navbar-collapse'>
              <li class='li-box'>
                <Link to='/logout' class='li-box'>
                  Log Out
                </Link>
              </li>
            </div>
          )}
        </nav>
        <br />
      </div>
    );
  }
}
