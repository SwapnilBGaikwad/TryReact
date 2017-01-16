import React from 'react'

class Comment extends React.Component {
    render() {
        return <div>
            <p>Author : {this.props.author}</p>
            <p>Comment : {this.props.body}</p>
        </div>
    }
}

export default Comment;