import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "../../../StateProvider";
import db from "../../../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  // console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  //***the problm that i face was with timestamp, at th end i found that my firebase bd feilds & the feilds here(sendMessage) were names differently thats why it was not working

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
