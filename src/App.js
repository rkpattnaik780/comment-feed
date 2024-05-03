import './App.css';
import { PostComment } from './components/PostComment';
import { useState } from 'react';
import { Comment } from './components/Comment';

function App() {

  const [comments, setComments] = useState([
    {text: "Hello World", timestamp: "2024-05-03T06:00:50.559Z", replies: [
      {text: "Hello React", timestamp: "2024-05-03T06:20:50.559Z"},
    ]},
    {text: "Hello Comments", timestamp: "2024-05-03T06:03:21.028Z", replies: [
      {text: "Hello Replies", timestamp: "2024-05-03T06:20:50.559Z"},
    ]},
    {text: "Summer Days", timestamp: "2024-05-03T06:03:27.028Z"},
    {text: "May Beginning", timestamp: "2024-05-03T06:05:21.028Z"}
  ]);

  const [newComment, setNewComment] = useState('');

  const addComment = (comment) => {
    setComments([...comments, comment])
  }

  return (
    <div className='App'>
      <PostComment newComment={newComment} setNewComment={setNewComment} addComment={addComment} />
      {
        comments.map(comment => (
          <Comment comment={comment} addComment={addComment} comments={comments} setComments={setComments} />
        ))
      }
    </div>
  );
}

export default App;
