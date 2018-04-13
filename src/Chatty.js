import React, { Component } from 'react';
import MessagesFeed from './components/MessagesFeed'
import InputPanel from './components/InputPanel'
import './Chatty.css';

class Chatty extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      user: 'Sofiya'
    };
  }

  componentWillMount() {

    fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=yXrHuTscEfFz')
    .then(response => response.json())
    .then(data => {
      const messages = data.map(({message, author, timestamp}) => {
        return {
          message,
          author,
          timestamp,
          isCurrentAuthor: author === this.state.user
        };
      });
    	this.setState({messages});
    });
  }

  render() {

    return (
      <div className="chatty">
        <MessagesFeed messages={this.state.messages} />
        <InputPanel />
      </div>
    );
  }
}

export default Chatty;
