import React from "react";
import axios from 'axios';

 export default class Messages extends React.Component{

  state = {
    name: '',
    email: '',
    message: []
  };
  componentDidMount = () => {
    this.getMessage();
  }

  getMessage = () => {
    axios.get("http://localhost:5000/messages")
    .then((response) => {
      this.setState({ messages : data});
      console.log('Data received!')
    })
    .catch(() => {
      alert(`Error retrieving data`)
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    axios({
      url: '/message/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getMessages();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      email: '',
      message: []
    });
  };

  displayMessages= (messages) => {

    if (!messages.length) return null;


    returnmessages.map((message, index) => (
      <div key={index} className="messages__display">
        <h3>{message.name}</h3>
        <p>{message.email}</p>
        <p>{message.message}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="message">
        <h2>Inbox</h2>


        <div className="message-">
          {this.displayMessages(this.state.message)}
        </div>
      </div>
    );
  }
}
