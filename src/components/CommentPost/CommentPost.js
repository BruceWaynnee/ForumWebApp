import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateCommentPost from '../UpdateCommentPost/UpdateCommentPost.js';

class CommentPost extends React.Component {
    constructor() {
        super();
        this.state = {
            cmtTitle: "Contact JL for emergency",
            cmtCurrentUser: "Bruce Wayne",
            cmtPostDescription: "Gotham city is under attack and I need to contact the JL for help, if anyone had their location please confirm me.",
        }
    }
    render() {
        return (
            <div>
                <Navbar option={3} />
                <div className="row ml-5 col-9 mt-3 p-4">
                    <h4>{this.state.cmtTitle} {/*Replace with title from API*/}</h4>
                    <small className="ml-5 mt-2">By {this.state.cmtCurrentUser}{/*Replace with current login user*/}</small>
                    <span className="mt-1 mb-2" readOnly >{this.state.cmtPostDescription}</span>
                    <textarea className="form-control mt-2" name="replyComment" cols="125" rows="4" placeholder="What's on your mind ?" ></textarea>
                    <form className='container p-0'>
                        <button type="submit" class="btn btn-primary float-right mt-2">Sign in</button>
                    </form>
                </div>
                <hr />

                {/*When the Comment button is clicked, the handleUpdateComment event will fire
                handleUpdateComment will get the input from "replyComment" detecte for user name who makes reply
                and pass all data with props to <UpdateCommentPost /> component for display.
                */}
                {/* these are for test only */}
                <UpdateCommentPost commentUser={"John Wick"} commentReply={"Maybe I can help you, check your email Wayne."} />
                <UpdateCommentPost commentUser={"Alfred PennyWolth"} commentReply={"Flash just contacted us moment ago, sir. I think you should check it out."} />
            </div>
        );
    }
}
export default CommentPost;