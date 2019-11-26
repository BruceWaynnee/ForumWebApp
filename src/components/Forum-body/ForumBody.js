import React from "react";
import ForumPost from '../Forum-post/ForumPost.js';

class ForumBody extends React.Component{
    render(){
        return(
            <div className='row'>
                <ForumPost />
            </div>
        );
    }
}
export default ForumBody