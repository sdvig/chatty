import React, { Component } from 'react';
import MessagesFeed from './MessagesFeed'
import OneFieldInput from './OneFieldInput'

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };

    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  onMessageSubmit(msg) {
    console.log('///// post this msg: ', msg);
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
      <div>
        <MessagesFeed messages={this.state.messages} />
        <div className="inputPanelContainer">
          <OneFieldInput
            placeholder="Message"
            buttonText="Send"
            onSubmit={this.onMessageSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
