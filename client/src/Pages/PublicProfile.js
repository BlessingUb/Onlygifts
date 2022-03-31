import Container from '../components/Form/Container';
import Select from 'react-select';
import avatar from '../images/lonely-boy.gif';
import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Gift = [
  { label: '🧁', value: 5 },
  { label: '🍸', value: 12 },
  { label: '🎂', value: 10 },
  { label: '🍩', value: 8 },
  { label: '🍺', value: 15 },
];

const PublicProfile = () => {
  const PaymentButtonText = 'Buy me a drink';

  const { username } = useParams();

  const userName = username.charAt(0).toUpperCase() + username.slice(1);

  console.log(username);

  const setUserState = {
    firstname: ''
    
  };

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
  };

  const componentDidMount = (username) => {
    axios
      .get(`http://localhost:5000/users/${username}`)
      .then((data) => {
        setUserState({ firstname: data.firstname });
        console.log(data);
        console.log(setUserState);
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(setUserState);
  console.log(componentDidMount);
  console.log(setUserState);

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('username');
  const type = queryParams.get('type');
  console.log(name, type);

  return (
    <div class='box'>
      <div id='profile-img'>
        <img id='avatar' src={avatar} />
      </div>
      <div id='profile-form' className='userProfile'>
        <div className='profile_pic_section'>
          {/* Profile pic placeholder begin */}
          <h1>{userName}</h1>
          {/* <div>Username: {setUserState}</div> */}
        </div>
        <div id='select'>
          {/* Bio placeholder begin */}
          <p>I love drinking pumkin spice latte in space</p>
          {/* Profile pic placeholder end */}
        </div>

        <form id='select' onSubmit={onSubmit}>
          <p>Make {userName} a gift</p>
          <Select options={Gift} />
          {/* </form> */}
          {/* <div id='payment' className='payment_section'> */}
          <Container id='btn-gift' formType='payment' buttonText={PaymentButtonText} onSubmit={onSubmit} />
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default PublicProfile;