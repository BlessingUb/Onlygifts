import Container from '../components/Form/Container';
import MsgContainer from '../components/Form/MessageContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import avatar from '../images/lonely-boy.gif';
import '../App.css';

const PrivateProfile = () => {
  const Username = Cookies.get('username');

  const [link, setLink] = useState(`localhost:3000/user/${Username}`);
  const [copySuccess, setCopySuccess] = useState('');

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess('Link Copied!');
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
  };

  return (
    <div className='title_section user_profile_title'>
      <div id='profile-img'>
        <img id='avatar' src={avatar} />
      </div>
      <div id='profile-form' className='userProfile'>
        <div className='profile_pic_section'>
          <h1>Welcome back {Username}!</h1>
        </div>
        <div className='copy_link'>
          <input
            id='link'
            value={`localhost:3000/user/${Username}`}
            onChange={inputHandler}
          />
          <button id='btn' onClick={copy} disabled={!link}>
            🔗Share Link
          </button>
          {copySuccess}
        </div>
        <div className='bio_section'>
          {/* Bio placeholder begin */}

          {/* Profile pic placeholder */}
        </div>
        <div>
          <MsgContainer id='button' buttonText='Inbox' onSubmit={onSubmit} />
          <Container id='button' buttonText='Edit Profile' onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PrivateProfile;
