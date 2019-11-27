import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ForumPost.css';
class ForumPost extends React.Component{
    render(){
        return(
            <div>
                {/* <a href="#" className="font-weight-normal post-title-size text-dark" >What do we do on holiday?</a>
                <p className="font-weight-lighter forum-poster">Post by: Bruce Wayne</p>
                <p className="post-desc-size" >Staying at home, playing video game.</p>
                <hr/> */}
                <a href="#" className="font-weight-normal post-title-size text-dark" >{this.props.title}</a>
                <p className="font-weight-lighter forum-poster">Post by: Bruce Wayne</p>
                <p className="post-desc-size" >{this.props.body}</p>
                <hr/>
            </div>
        );
    }
}
export default ForumPost;