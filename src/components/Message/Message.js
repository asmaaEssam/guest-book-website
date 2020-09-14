import React, { useState } from "react";
import UserImg from "../../media/imgs/user.jpg";
import ReplyForm from "../Reply/Reply";
const Message = ({userName,msgBody,msgReplies,msgId}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
          <div className="message">
            <div className="user-section">
              <img className="user-img" src={UserImg} alt="" />
              <p className="user-name">{userName} </p>
              <button
                className="close-button"
              >
                &times;
              </button>
              <button className='edit-button'>&#9998;</button>
            </div>
            <div className="msg-body">
              <p>{msgBody} </p>
            </div>
            <div className="msg-footer">
              {!showReplyForm ? 
                <>
                  {msgReplies.length ? <span>show replies</span> : ""}
                  <button className='reply-button' onClick={() => setShowReplyForm(true)}>Reply</button>
                </>:""
              }
              {showReplyForm ? <ReplyForm setShowReplyForm = {setShowReplyForm} />:""}
            </div>
          </div>
  );
};

export default Message;
