import React from 'react';
import './UsernameInput.css';
import OneFieldInput from './OneFieldInput'

const UsernameInput = ({onSubmit}) => {
  return (
    <div className="usernameInput">
      <OneFieldInput
        placeholder="What is your name?"
        buttonText="Start to chat"
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default UsernameInput;
