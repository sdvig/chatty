import React from 'react';
import format from 'date-fns/format'
import classnames from 'classnames';
import './MessagesFeed.css';

const MessagesFeed = ({messages}) => {
  return (
    <div className="messagesFeed">
      {messages.map((message, i) => <Message {...message} key={i} />)}
    </div>
  );
}

const Message = ({message, timestamp, author, isCurrentAuthor}) => {
  return (
    <div className={classnames('message-container', {
      'my-message-container': isCurrentAuthor
    })}>
      <div className="message">
        {!isCurrentAuthor && <p className="message-author">{author}</p>}
        <p>{message}</p>
        <p className="message-time">{format(timestamp, 'DD MMM YYYY HH:mm')}</p>
      </div>
    </div>
  );
}

export default MessagesFeed;
