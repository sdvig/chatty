import React, { Component } from 'react';
import UsernameInput from './components/UsernameInput'
import Chat from './components/Chat'

import './Chatty.css';

class Chatty extends Component {
  constructor() {
    super();

    this.state = {
      username: null
    };

    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }

  onUsernameSubmit(username) {
    this.setState({username})
  }

  render() {
    const {username} = this.state;
    return (
      <div className="chatty">
        {!username && <UsernameInput onSubmit={this.onUsernameSubmit} />}
        {username && <Chat username={username} />}
      </div>
    );
  }
}

export default Chatty;
