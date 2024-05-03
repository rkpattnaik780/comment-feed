import { useState } from "react";
import { PostComment } from "./PostComment";

export const Reply = ({ reply, comments, setComments, commentID }) => {

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [newReply, setNewReply] = useState("");

    const handleAddReplytoReply = (replytoReply) => {
        if(!reply.replies) reply.replies = [];
        reply.replies.push(replytoReply);
        const newComments = [...comments];

        const currentComment = newComments.filter(newComment => newComment.timestamp === commentID)[0];

        console.log(currentComment);

        currentComment.replies.filter(currReply => currReply.timestamp === reply.timestamp)[0] = reply;  //.replies.push(replytoReply);
        console.log("after adding replies", currentComment);
        setComments(newComments);
        setShowReplyBox(false);
    }

    return (
        <>
            <p>{reply.text}</p>
        {showReplyBox && <PostComment newComment={newReply} setNewComment={setNewReply} addComment={handleAddReplytoReply} />}
                <div className='control-btns' style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "0.5rem" }} onClick={() => setShowReplyBox(!showReplyBox)}>Reply</span>
                </div>
                <div style={{ marginLeft: "2rem" }}>
                {
                reply?.replies?.map(reply => <Reply reply={reply} commentID={reply?.timestamp} comments={comments} setComments={setComments} />)
                }
            </div>
        </>
        
    )
}