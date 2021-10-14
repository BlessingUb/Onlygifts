import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import messages from './BookCard';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/messages')
      .then(res => {
        this.setState({
          messages: res.data
        })
      })
      .catch(err =>{
        console.log('Error from Messages');
      })
  };


  render() {
    const messages = this.state.messages;
    console.log("Message: " + messages);
    let messageList;

    if(!messagess) {
      messageList = "there is no message for you!";
    } else {
      messageList = messages.map((message, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;