import { useState } from "react"
import { PostComment } from "./PostComment";
import { Reply } from "./Reply";

export const Comment = ({ comment, comments, setComments }) => {

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [isEdit, setIsEdit] = useState(true);

    const [reply, setReply] = useState("");

    const handleAddReply = (reply) => {

        if(isEdit) {
            const newComments = [...comments];
            newComments.filter(newComment => newComment.timestamp === comment.timestamp)[0].text = reply.text;
            setComments(newComments);
            setShowReplyBox(false);
        } else {
            if(!comment.replies) comment.replies = [];
            comment.replies.push(reply);
            const newComments = [...comments];

            newComments.filter(newComment => newComment.timestamp === comment.timestamp)[0] = comment;
            setComments(newComments);
            setShowReplyBox(false);
        }
        
    }

    const handleDelete = () => {
        const newComments = [...comments];
        setComments(newComments.filter(newComment => newComment.timestamp !== comment.timestamp));
    }

    const enableEdit = () => {
        setIsEdit(true);
        setShowReplyBox(true);
        setReply(comment.text);
    }

    return (
        <div style={{ width: "fit-content"}}>
            <div>
                <p>{comment?.text}</p>
                {showReplyBox && <PostComment newComment={reply} setNewComment={setReply} addComment={handleAddReply} />}
                <div className='control-btns' style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "0.5rem" }} onClick={enableEdit}>Edit</span>
                    <span style={{ fontSize: "0.5rem" }} onClick={handleDelete}>Delete</span>
                    <span style={{ fontSize: "0.5rem" }} onClick={() => setShowReplyBox(!showReplyBox)}>Reply</span>
                </div>
            </div>
            
            <div style={{ marginLeft: "2rem" }}>
                {
                comment?.replies?.map(reply => <Reply reply={reply} commentID={comment?.timestamp} comments={comments} setComments={setComments} />)
                }
            </div>
          </div>
    )
}