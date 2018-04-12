import React, { Component } from 'react';
import MessagesFeed from './components/MessagesFeed'
import InputPanel from './components/InputPanel'
import './Chatty.css';

class Chatty extends Component {
  render() {
    return (
      <div className="chatty">
        <MessagesFeed />
        <InputPanel />
      </div>
    );
  }
}

export default Chatty;
