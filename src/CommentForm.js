import React from 'react'

class CommentForm extends React.Component {

    constructor() {
        super();
        this.state = {
            author: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let author = this._authorInput.value;
        let comment = this._bodyInput.value;
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            Author : <input type="text" placeholder="Author" ref={(input) => this._authorInput = input}/>
            Comment: <input type="text" placeholder="Comment" ref={(commentInput => this._bodyInput = commentInput)}/>
            <input type="submit" value="Submit"/>
        </form>;
    }
}

export default CommentForm;