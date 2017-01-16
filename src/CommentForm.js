import React from 'react'

class CommentForm extends React.Component {

    constructor() {
        super();
        this.state = {
            author: ""
        };
    }

    handleSubmit(e) {
        let authorData = e.target;

        this.setState({
            author: authorData
        });
    }

    render() {
        let tag = <p>{this.state.author}</p>;
        return <form onSubmit={this.handleSubmit.bind(this)}>
            Author : <input type="text" placeholder="Author"/>
            Comment: <input type="text" placeholder="Comment"/>
            <input type="button" value="Submit"/>
            Author State : {tag}
        </form>;
    }
}

export default CommentForm;