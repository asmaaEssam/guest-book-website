import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [msgbody, setMsgbody] = useState("");
  const [msgError, setMsgError] = useState("");


  const onChange = (e) => {
    setMsgbody(e.target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
    if (msgbody) {
    }else{
        setMsgError("Please write your message")
    }
  };
  return (
    <>
      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal">
            <header className="modal-header">
              <p className="modal-title">Write a Message</p>
              <button
                onClick={() => setShowModal(false)}
                className="close-button"
              >
                &times;
              </button>
            </header>
            <main className="modal-content">
              <form className="msg-form">
                <textarea
                  className="text-area"
                  onChange={onChange}
                  value={msgbody}
                  placeholder="Write a Message"
                />
                <span className="input-error">{msgError}</span>
                <button className="submit-form" onClick={handleSubmit}>
                  post
                </button>
              </form>
            </main>
          </div>
        </>
      )}
      <div className="button-modal" onClick={() => setShowModal(!showModal)}>
        <button type="button" className="open-modal" data-open="modal1">
          +
        </button>
        <span className="write-msg">Write Your Message</span>
      </div>
    </>
  );
};

export default Modal;
