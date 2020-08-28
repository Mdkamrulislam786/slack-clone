import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
//Matreial icons
import StarBorderOutLinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../firebase";
import Messages from "./Messages/Messages";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMeassages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log("messages>>>>", roomMeassages);

  //1.ChangesUrl 2.connects To the database 3.uses urlParams {roomId} to fetch from the database

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name} </strong> <StarBorderOutLinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutLinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMeassages.map(({ message, timestamp, user, userImg }, index) => (
          <Messages
            key={index}
            message={message}
            timeStamp={timestamp}
            user={user}
            userImg={userImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
