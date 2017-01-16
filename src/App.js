import React from 'react'
import CommentBox from './CommentBox'
import Comments from './Comments'

class App extends React.Component {

    render() {
        const comments = [
            {author: "Mr. A", body: "Hello New Comment A"},
            {author: "Mr. B", body: "Hello New Comment B"}
        ];
        return <div>
            <CommentBox/>
            <Comments title="Comments : " comments={comments}/>
        </div>;
    }
}

export default App;