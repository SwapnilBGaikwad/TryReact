import React from 'react'

class Comments extends React.Component {
    render() {
        let commentTags = this.getComments();
        return <p>
            {this.props.title}
            {commentTags}
        </p>
    }

    getComments() {
        let comments = this.props.comments;
        return comments.map((comment) => {
            return <div>
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
            </div>

        });
    }
}

export default Comments;