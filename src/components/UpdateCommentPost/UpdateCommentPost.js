import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateCommentPost extends React.Component {
    render() {
        return (
            <div className='mx-5 col-9'>
                <h4>By {this.props.commentUser}{/*Replace with user who make comment*/}</h4>
                <span className="mx-3">
                    {this.props.commentReply}
                </span>
                <hr/>
            </div>
        );
    }
}
export default UpdateCommentPost;