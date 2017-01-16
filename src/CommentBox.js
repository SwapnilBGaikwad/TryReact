import React from 'react'

class CommentBox extends React.Component {
    render() {
        return <form>
            <p>Author : </p>
            <input type="text" placeholder="Author"/>
            <p>Comment : </p>
            <input type="text" placeholder="Comment"/>
            <p></p>
            <input type="button" value="Submit"/>
        </form>;
    }
}

export default CommentBox;