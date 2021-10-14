import axios from "axios";
import React, { Component } from "react";
import StripeToken from "./stripe.components";
import { Redirect } from "react-router-dom";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(message);

    axios
      .post("http://localhost:5000/messages", message)
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

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Send Form </h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="name"
              value={this.state.name}
              onChange={this.onChangeName}
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="message"
              value={this.state.message}
              onChange={this.onChangeMessage}
              placeholder="message"
            />
          </div>
          <div>
            <input type="submit" value="Send Form" Redirect to="/p-form" />
          </div>
        </form>
      </div>
    );
  }
}
