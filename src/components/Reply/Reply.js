import React, {useState} from 'react';

const ReplyForm = ({setShowReplyForm}) => {
    const [reply,setReply] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(!reply){
            //ToDO Posting Reply in Database
        }
    }
    return ( 
        <form className="reply-form">
            <textarea className="reply-section" value={reply} onChange={(e)=> setReply(e.target.value)} placeholder="Write a Reply" />
            <div style={{alignSelf:'flex-end'}}>
            <button className='cancle' onClick={() => setShowReplyForm(false)}>Cancle</button>
            <button className='submit-form' onClick = {handleSubmit}>Reply</button>
            </div>
        </form>
     );
}
 
export default ReplyForm;