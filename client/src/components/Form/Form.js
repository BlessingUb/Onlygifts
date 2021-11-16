import React from "react";
import { useState } from "react";
import axios from 'axios';
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
      .then(() => res.status(200).json("Message sent!"))
      .catch(err => {
        console.log("Error in messages!");
      })
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
        
        
          <button id='button' type='submit'>
            Continue to payment
          </button>
       
      </div>
    </form>
  );
};

export default Form;
