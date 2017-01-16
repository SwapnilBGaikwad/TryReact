import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'

class App extends React.Component {

    render() {
        return <div>
            <CommentForm/>
            {this.getComments()}
        </div>;
    }

    getComments() {
        const comments = [
            {id: 1, author: "Mr. A", body: "Hello New Comment A"},
            {id: 2, author: "Mr. B", body: "Hello New Comment B"}
        ];
        return comments.map(comment => {
            return <Comment key={comment.id} author={comment.author} body={comment.body}/>
        });
    }
}

export default App;