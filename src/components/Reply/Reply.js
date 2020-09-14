import React, {useState} from 'react';

const ReplyForm = () => {
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
            <button className='submit-form' onClick = {handleSubmit}>Reply</button>
        </form>
     );
}
 
export default ReplyForm;