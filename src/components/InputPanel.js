import React from 'react';
import './InputPanel.css';

const InputPanel = () => {
  return (
    <div className="inputPanelContainer">
      <div className="inputPanel">
        <input type="text" placeholder="Message" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default InputPanel;
