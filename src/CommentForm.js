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
        let author = this._authorInput;
        let comment = this._bodyInput;
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            Author : <input type="text" placeholder="Author" ref={(input) => this._authorInput = input}/>
            Comment: <input type="text" placeholder="Comment" ref={(commentInput => this._bodyInput = commentInput)}/>
            <input type="button" value="Submit"/>
        </form>;
    }
}

export default CommentForm;