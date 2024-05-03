export const PostComment = (props) => {

    const handleCommentChange = (e) => {
        props.setNewComment(e.target.value);
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if(!props.timestamp) props.addComment({ "text": props.newComment, "timestamp": new Date().toISOString()});
        props.setNewComment("");
    }

    return(
        <form onSubmit={handleCommentSubmit}>
            <input type='text' value={props.newComment} onChange={handleCommentChange} />
            <button disabled={!props.newComment}>Submit</button>
        </form>
    )
}