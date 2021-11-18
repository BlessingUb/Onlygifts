import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
// import 'client/src/App.css';



export const Form = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const initialValues = {
    name,
    email,
    message,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(initialValues)
    axios
      .post('http://localhost:5000/messages/send', initialValues)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          window.location = "/p-form";
        } else {
          alert(res.data);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}> 
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='name' onChange={(e) => setName(e.target.value)} className='form-control gift_form_name' id='name' placeholder='Enter name here' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email' onChange={(e) => setEmail(e.target.value)}
          className='form-control gift_form_email'
          id='email'
          placeholder='mr_scrooge@onlygifts.com'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Message</label>
        <input
          id='input'
          type='textarea' onChange={(e) => setMessage(e.target.value)}
          className='form-control gift_form_message'
          id='message'
          placeholder='Drop a message...'
        />
      </div>
      <div className='form-group'>
      <input type="submit" value="Send" Redirect to="/p-form" />
      </div>
    </form>
  );
};

export default Form;
