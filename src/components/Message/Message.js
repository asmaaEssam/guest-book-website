import React, { useState } from "react";
import UserImg from "../../media/imgs/user.jpg";
import ReplyForm from "../Reply/Reply";
const Message = () => {
  const [showReplyForm, setShowReplyForm] = useState(false);
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
  ]);
  return (
    <div className="msgs-list">
      {msgs.length ? (
        msgs.map((msg) => (
          <div className="message" key={msg.id}>
            <div className="user-section">
              <img className="user-img" src={UserImg} alt="" />
              <p className="user-name">{msg.userName} </p>
            </div>
            <div className="msg-body">
              <p>{msg.body} </p>
            </div>
            <div className="msg-footer">
              {showReplyForm ? (
                <ReplyForm />
              ) : (
                <>
                  {msg.replies.length ? <span>show replies</span> : ""}
                  <button onClick={() => setShowReplyForm(true)}>Reply</button>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>there is no Messages</div>
      )}
    </div>
  );
};

export default Message;
