import React, { Component } from 'react';
import queryString from 'query-string';
import last from 'lodash/last';
import MessagesFeed from './MessagesFeed';
import OneFieldInput from './OneFieldInput';

const CHATTY_API = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/';
const CHATTY_TOKEN = 'yXrHuTscEfFz';
const POLLING_INTERVAL = 1000 * 10;

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      latestTimestamp: null,
    };

    this.onMessageSubmit = this.onMessageSubmit.bind(this);
    this.formatMessage = this.formatMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  onMessageSubmit(msg) {
    this.postMessage(msg)
      .then(response => response.json())
      .then(data => {
          let {messages} = this.state;
          const latestMessage = this.formatMessage(data);
          messages.push(latestMessage);
          this.setState({
            messages,
            latestTimestamp: latestMessage.timestamp
          })
      }
    )
  }

  postMessage(message) {
    const data = {
      message,
      'author': this.props.username
    };
    return fetch(CHATTY_API, {
        body: JSON.stringify(data),
        headers: {
          'token': CHATTY_TOKEN,
          'content-type': 'application/json'
        },
        method: 'POST'
      })
  }

  formatMessage({message, author, timestamp}) {
    return {
      message,
      author,
      timestamp: parseInt(timestamp, 10),
      isCurrentAuthor: author === this.props.username
    }
  }

  getMessages() {

    const {latestTimestamp} = this.state;

    let params = {
      token: CHATTY_TOKEN
    }

    if (latestTimestamp) {
      params.since = latestTimestamp;
    }

    const query = queryString.stringify(params);

    fetch(`${CHATTY_API}?${query}`)
    .then(response => response.json())
    .then(data => {
      if (!data.length) return false;
      const newMessages = data.map(this.formatMessage);
      const {messages} = this.state;
      const latestTimestamp = last(newMessages).timestamp;
    	this.setState({
        messages: messages.concat(newMessages),
        latestTimestamp
      });
    });
  }


  componentWillMount() {
    this.getMessages();
    this.pollingInterval = setInterval(this.getMessages, POLLING_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.pollingInterval);
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
