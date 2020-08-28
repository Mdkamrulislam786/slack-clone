import React from "react";
import "./Message.css";

const Messages = ({ message, timeStamp, user, userImg }) => {
  return (
    <div className="messages">
      <img src={userImg} alt="img" />
      <div className="messages__info">
        <h4>
          {user}{" "}
          <span className="message__timeStamp">
            {new Date(timeStamp?.toDate()).toUTCString()}
          </span>{" "}
        </h4>
        <p> {message} </p>
      </div>
    </div>
  );
};

export default Messages;
