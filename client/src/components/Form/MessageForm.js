import React from 'react';

const MessageForm = () => {
  return (
    <form>
      <h1 id='center'>Your Messages</h1>
      <div id='note'>
        <p>Rubberduckie sent you 🍸</p>
        <p>Really appreciate you took time to help me debug my errors today!</p>
        <p>mr_scrooge@onlygifts.com</p>
      </div>
      <div id='note'>
        <p>MissQueenB sent you 🍺</p>
        <p>Thanks for our amazing time here at Makers! The next one is on you😜</p>
        <p>shinystar@example.com</p>
      </div>
      <div id='note'>
        <p>DantheMan sent you ☕️</p>
        <p>Just thought I leave this special message here to celebrate our joint enthusiasm for oats🍪</p>
        <p>danny@gmail.com</p>
      </div>
      <button id='button' type='submit'>
        Back to Profile
      </button>
    </form>
  );
};

export default MessageForm;