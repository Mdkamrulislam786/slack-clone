import React from "react";
import "./Message.css";

const Messages = ({ message, timestamp, user, userImage }) => {
  return (
    <div className="messages">
      <img src={userImage} alt="" />
      <div className="messages__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
