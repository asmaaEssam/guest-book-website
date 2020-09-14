import React, { useState } from "react";
import Message from './Message'

const Messages = () => {
  const [msgs, setMsgs] = useState([
    {
      id: 1,
      userName: "asmaa essam",
      body:
        "congratulations wish you all th best !!! congratulations wish you all th best !!! congratulations wish you all th best !!! congratulations wish you all th best !!!",
      replies: [],
    },
    {
      id: 2,
      userName: "asmaa essam",
      body: "congratulations wish you all th best !!!",
      replies: [],
    },
    {
      id: 3,
      userName: "asmaa essam",
      body: "congratulations wish you all th best !!!",
      replies: [],
    },
    {
        id: 4,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
      {
        id: 5,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
      {
        id: 6,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
      {
        id: 7,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
      {
        id: 8,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
      {
        id: 9,
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: [],
      },
  ]);
  return (
    <div className="msgs-list">
      {msgs.length ?
        msgs.map((msg) => <Message key={msg.id} userName={msg.userName} msgBody={msg.body} msgReplies={msg.replies} />) : (
        <div>there is no Messages</div>
      )}
    </div>
  );
};

export default Messages;