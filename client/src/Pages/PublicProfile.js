import Container from '../components/Form/Container';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const UserProfile = () => {
  const PaymentButtonText = 'Choose Gift';
  const Username = Cookies.get('username');

  const [link, setLink] = useState(`https://only-gift.herokuapp.com/user/${Username}`);

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
  };

  return (
    <div className='title_section user_profile_title'>
      <div className='userProfile'>
        <div className='profile_pic_section'>
          {/* Profile pic placeholder begin */}
          <h1>This is the Profile picture section</h1>
          <img
            src='https://image.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg'
            width='262px'
            alt='this is a placeholder'
            height='262px'
            border-radius='50%'
          />
        </div>
        <div className='bio_section'>
          {/* Bio placeholder begin */}
          <p>something really lovely about myself</p>
          {/* Profile pic placeholder end */}
        </div>

        <form onSubmit={onSubmit}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-4'>
                <Select options={Gift} />
              </div>
              <div className='col-md-4'></div>
            </div>
          </div>
        </form>
        <div id='payment' className='payment_section'>
          <Container formType='payment' buttonText={PaymentButtonText} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
