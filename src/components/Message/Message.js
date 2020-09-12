import React,{useState} from 'react';
import UserImg from '../../media/imgs/user.jpg'
const Message = () => {

    const[msgs,setMsgs] = useState({
        userName: "asmaa essam",
        body: "congratulations wish you all th best !!!",
        replies: []
    })
    return ( 
    <div className="message">
        <div className="user-section">
            <img className="user-img" src={UserImg} alt=''/>
            <p className="user-name">asmaa essam</p>
        </div>
        <div className="msg-body">
            <p>congratulations wish you all th best !!!</p>
        </div>
        <div className="msg-footer">
            {msgs.replies.length? <span>show replies</span>:"" }
        <button>Reply</button>
        </div>
    </div> );
}
 
export default Message;